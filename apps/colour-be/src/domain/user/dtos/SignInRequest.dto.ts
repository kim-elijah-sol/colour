import { IsEmail, IsString } from 'class-validator';

export class SignInRequestDTO {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
