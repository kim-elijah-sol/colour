import { Module } from '@nestjs/common';
import { UserRepository } from 'src/domain/user/user.repository';
import { UserService } from 'src/domain/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { JwtAccessTokenGuard } from './guard/accessToken.guard';
import { JwtRefreshTokenGuard } from './guard/refreshToken.guard';

@Module({
  providers: [
    AuthService,
    AuthRepository,

    UserService,
    UserRepository,

    PrismaService,

    JwtAccessTokenGuard,
    JwtRefreshTokenGuard,
  ],
  exports: [AuthService],
})
export class AuthModule {}
