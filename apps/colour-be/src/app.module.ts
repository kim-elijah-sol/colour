import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ColourModule } from './domain/colour/colour.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [
    JwtModule.register({ global: true }),
    UserModule,
    AuthModule,
    ColourModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
