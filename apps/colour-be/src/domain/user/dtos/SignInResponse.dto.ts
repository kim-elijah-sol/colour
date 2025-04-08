import { IsString } from 'class-validator';

export class SignInResponseDTO {
  @IsString()
  readonly accessToken: string;

  @IsString()
  readonly refreshToken: string;
}
