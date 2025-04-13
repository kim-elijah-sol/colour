import { IsEmail, IsOptional, IsString } from 'class-validator';

export class MeResponseDTO {
  @IsEmail()
  email: string;

  @IsString()
  profileColour: string;

  @IsString()
  @IsOptional()
  nickname: string | null;
}
