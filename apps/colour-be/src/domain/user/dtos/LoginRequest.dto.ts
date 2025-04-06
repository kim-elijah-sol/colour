import { IsEmail, IsString } from 'class-validator';

export class LoginRequestDTO {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
}
