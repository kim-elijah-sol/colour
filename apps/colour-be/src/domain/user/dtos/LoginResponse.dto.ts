import { IsString } from 'class-validator';

export class LoginResponseDTO {
  @IsString()
  readonly accessToken: string;

  @IsString()
  readonly refreshToken: string;
}
