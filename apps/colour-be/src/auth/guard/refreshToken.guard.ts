import {
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { TokenPayloadDTO } from '../dtos/TokenPayload.dto';

@Injectable()
export class JwtRefreshTokenGuard extends AuthGuard('refreshToken') {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();

      const refreshToken = request?.headers?.refresh_token as string;

      if (!refreshToken) {
        throw new UnauthorizedException('refresh token is undefined');
      }

      const payload = this.validate(refreshToken);

      const result = this.authService.findRefreshToken(
        payload.idx,
        refreshToken,
      );

      if (!result) {
        throw new UnauthorizedException('refresh token is wrong');
      }

      request.tokenInfo = payload;

      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException) throw error;

      throw new InternalServerErrorException();
    }
  }

  validate(token: string): TokenPayloadDTO {
    const secret = process.env.JWT_REFRESH_TOKEN_SECRET!;

    try {
      const verify: TokenPayloadDTO = this.jwtService.verify(token, {
        secret,
      });

      return verify;
    } catch (e) {
      switch (e.message) {
        case 'jwt expired':
          throw new UnauthorizedException('token is expired');
        case 'invalid signature':
        case 'jwt malformed':
          throw new UnauthorizedException('token is invalid');
        default:
          throw new InternalServerErrorException();
      }
    }
  }
}
