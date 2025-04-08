import { ColourResponse } from '@colour/types';
import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  InternalServerErrorException,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { TokenDTO } from 'src/auth/dtos/Token.dto';
import { TokenInfoDTO } from 'src/auth/dtos/TokenInfo.dto';
import { JwtRefreshTokenGuard } from 'src/auth/guard/refreshToken.guard';
import { Token, TokenInfo } from 'src/decorator';
import { LoginRequestDTO } from './dtos/LoginRequest.dto';
import { LoginResponseDTO } from './dtos/LoginResponse.dto';
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

  @Post('sign-up-request')
  @HttpCode(200)
  async signUpRequest(
    @Body() signUpRequest: SignUpRequestDTO
  ): Promise<ColourResponse<SignUpResponseDTO>> {
    const alreadyRegisteredUser = await this.userService.findUserByEmail(
      signUpRequest.email
    );

    if (alreadyRegisteredUser !== null) {
      throw new ConflictException(
        `${signUpRequest.email} is already registered`
      );
    }

    const createVerificationEmailResult =
      await this.userService.createVerificationEmail(signUpRequest);

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
      throw new BadRequestException('invalid virify request');

    await this.userService.deleteVerificationEmailAtVerifySuccess(
      verifyRequestDTO
    );

    const { requestEmail, requestPassword } = verificationEmail;

    await this.userService.signUp({
      email: requestEmail,
      password: requestPassword,
    });

    return {
      statusCode: 200,
      success: true,
    };
  }

  @Post('sign-in')
  @HttpCode(200)
  async login(@Body() loginRequestDTO: LoginRequestDTO) {
    try {
      const user = await this.userService.login(loginRequestDTO);

      if (!user)
        throw new UnauthorizedException('Can not find matching account');

      const accessToken = await this.authService.createAccessToken(user);
      const refreshToken = await this.authService.createRefreshToken(user);

      const tokens: LoginResponseDTO = {
        accessToken,
        refreshToken,
      };

      await this.authService.saveRefreshToken(user.idx, tokens.refreshToken);

      return {
        statusCode: 200,
        success: true,
        data: tokens,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }

      throw new InternalServerErrorException();
    }
  }

  @Delete('sign-out')
  @HttpCode(200)
  async logout(@Token() token: TokenDTO) {
    try {
      await this.authService.removeRefreshToken(token.refreshToken);

      return {
        statusCode: 200,
        success: true,
      };
    } catch {
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(JwtRefreshTokenGuard)
  @Get('refresh')
  @HttpCode(200)
  async refresh(
    @Token() token: TokenDTO,
    @TokenInfo() tokenInfo: TokenInfoDTO
  ) {
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
}
