import { ColourResponse } from '@colour/types';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpCode,
  Patch,
  Post,
  Query,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { AuthService } from 'src/auth/auth.service';
import { TokenDTO } from 'src/auth/dtos/Token.dto';
import { TokenInfoDTO } from 'src/auth/dtos/TokenInfo.dto';
import { JwtAccessTokenGuard } from 'src/auth/guard/accessToken.guard';
import { JwtRefreshTokenGuard } from 'src/auth/guard/refreshToken.guard';
import { Token, TokenInfo } from 'src/decorator';
import { ChangeEmailRequestDTO } from './dtos/ChangeEmailRequest.dto';
import { ChangeEmailResponseDTO } from './dtos/ChangeEmailResponse.dto';
import { ChangePasswordRequestDTO } from './dtos/ChangePasswordRequest.dto';
import { CheckEmailRequestDTO } from './dtos/CheckEmailRequest.dto';
import { CheckEmailResponseDTO } from './dtos/CheckEmailResponse.dto';
import { MeResponseDTO } from './dtos/MeResponse.dto';
import { RefreshResponseDTO } from './dtos/RefreshResponse.dto';
import { SignInRequestDTO } from './dtos/SignInRequest.dto';
import { SignInResponseDTO } from './dtos/SignInResponse.dto';
import { SignUpRequestDTO } from './dtos/SignUpRequest.dto';
import { SignUpResponseDTO } from './dtos/SignUpResponse.dto';
import { VerifyRequestDTO } from './dtos/VerifyRequest.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Get('check-email')
  @HttpCode(200)
  async checkEmail(
    @Query() checkEmailRequestDTO: CheckEmailRequestDTO
  ): Promise<ColourResponse<CheckEmailResponseDTO>> {
    const isAlready =
      (await this.userService.findUserByEmail(checkEmailRequestDTO.email)) !==
      null;

    return {
      statusCode: 200,
      success: true,
      data: {
        isAlready,
      },
    };
  }

  @Post('sign-up-request')
  @HttpCode(200)
  async signUpRequest(
    @Body() signUpRequestDTO: SignUpRequestDTO
  ): Promise<ColourResponse<SignUpResponseDTO>> {
    const alreadyRegisteredUser = await this.userService.findUserByEmail(
      signUpRequestDTO.email
    );

    if (alreadyRegisteredUser !== null) {
      throw new ConflictException(
        `${signUpRequestDTO.email} is already registered`
      );
    }

    const createVerificationEmailResult =
      await this.userService.createVerificationEmail(signUpRequestDTO);

    return {
      statusCode: 200,
      success: true,
      data: {
        verificationId: createVerificationEmailResult.id,
      },
    };
  }

  @Post('verify')
  @HttpCode(200)
  async verify(
    @Body() verifyRequestDTO: VerifyRequestDTO
  ): Promise<ColourResponse> {
    const verificationEmail =
      await this.userService.findVerificationEmail(verifyRequestDTO);

    if (verificationEmail === null)
      throw new ForbiddenException('invalid verify request');

    await this.userService.deleteVerificationEmailAtVerifySuccess(
      verifyRequestDTO
    );

    const { requestEmail, requestPassword, code } = verificationEmail;

    await this.userService.signUp({
      email: requestEmail,
      password: requestPassword!,
      profileColour: code,
    });

    return {
      statusCode: 200,
      success: true,
    };
  }

  @Post('sign-in')
  @HttpCode(200)
  async signIn(
    @Body() signInRequestDTO: SignInRequestDTO
  ): Promise<ColourResponse<SignInResponseDTO>> {
    const user = await this.userService.signIn(signInRequestDTO);

    if (!user) throw new ForbiddenException('Can not find matching account');

    const accessToken = await this.authService.createAccessToken(user);
    const refreshToken = await this.authService.createRefreshToken(user);

    const tokens: SignInResponseDTO = {
      accessToken,
      refreshToken,
    };

    await this.authService.saveRefreshToken(user.idx, tokens.refreshToken);

    return {
      statusCode: 200,
      success: true,
      data: tokens,
    };
  }

  @Delete('sign-out')
  @HttpCode(200)
  async signOut(@Token() token: TokenDTO): Promise<ColourResponse> {
    await this.authService.removeRefreshToken(token.refreshToken);

    return {
      statusCode: 200,
      success: true,
    };
  }

  @UseGuards(JwtRefreshTokenGuard)
  @Get('refresh')
  @HttpCode(200)
  async refresh(
    @Token() token: TokenDTO,
    @TokenInfo() tokenInfo: TokenInfoDTO
  ): Promise<ColourResponse<RefreshResponseDTO>> {
    const newAccessToken = await this.authService.refresh(
      tokenInfo.idx,
      token.refreshToken
    );

    return {
      statusCode: 200,
      success: true,
      data: {
        accessToken: newAccessToken,
      },
    };
  }

  @UseGuards(JwtAccessTokenGuard)
  @Get('me')
  @HttpCode(200)
  async me(
    @TokenInfo() tokenInfo: TokenInfoDTO
  ): Promise<ColourResponse<MeResponseDTO>> {
    const data = await this.userService.findMyMe(tokenInfo.idx);

    if (data === null) {
      throw new UnauthorizedException("Can't find user");
    }

    return {
      statusCode: 200,
      success: true,
      data,
    };
  }

  @UseGuards(JwtAccessTokenGuard)
  @Post('change-email-request')
  @HttpCode(200)
  async changeEmailRequest(
    @Body() changeEmailRequestDTO: ChangeEmailRequestDTO
  ): Promise<ColourResponse<ChangeEmailResponseDTO>> {
    const alreadyRegisteredUser = await this.userService.findUserByEmail(
      changeEmailRequestDTO.email
    );

    if (alreadyRegisteredUser !== null) {
      throw new ConflictException(
        `${changeEmailRequestDTO.email} is already registered`
      );
    }

    const createVerificationEmailResult =
      await this.userService.createVerificationEmail(changeEmailRequestDTO);

    return {
      statusCode: 200,
      success: true,
      data: {
        verificationId: createVerificationEmailResult.id,
      },
    };
  }

  @UseGuards(JwtAccessTokenGuard)
  @Patch('verify-change-email')
  @HttpCode(200)
  async verifyChangeEmail(
    @TokenInfo() tokenInfo: TokenInfoDTO,
    @Body() verifyRequestDTO: VerifyRequestDTO
  ): Promise<ColourResponse> {
    const verificationEmail =
      await this.userService.findVerificationEmail(verifyRequestDTO);

    if (verificationEmail === null)
      throw new ForbiddenException('invalid verify request');

    await this.userService.deleteVerificationEmailAtVerifySuccess(
      verifyRequestDTO
    );

    const { requestEmail } = verificationEmail;

    await this.userService.changeEmail(tokenInfo.email, requestEmail);

    return {
      statusCode: 200,
      success: true,
    };
  }

  @UseGuards(JwtAccessTokenGuard)
  @Patch('change-password')
  @HttpCode(200)
  async changeEmail(
    @TokenInfo() tokenInfo: TokenInfoDTO,
    @Body() changePasswordRequestDTO: ChangePasswordRequestDTO
  ): Promise<ColourResponse> {
    const currentPasswordInDB =
      await this.userService.findCurrentPasswordByUserIdx(tokenInfo.idx);

    if (
      currentPasswordInDB !==
      SHA256(changePasswordRequestDTO.currentPassword).toString()
    )
      throw new ForbiddenException(
        'The current password you entered does not match.'
      );

    await this.userService.changePasswordByUserIdx(
      tokenInfo.idx,
      changePasswordRequestDTO.newPassword
    );

    return {
      statusCode: 200,
      success: true,
    };
  }
}
