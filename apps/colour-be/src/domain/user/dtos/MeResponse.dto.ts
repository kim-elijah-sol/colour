import { IsEmail, IsString } from 'class-validator';

export class MeResponseDTO {
  @IsEmail()
  email: string;

  @IsString()
  profileColour: string;
}
