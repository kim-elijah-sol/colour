import { IsEmail } from 'class-validator';

export class CheckEmailRequestDTO {
  @IsEmail()
  email: string;
}
