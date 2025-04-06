import { IsString, Length } from 'class-validator';

export class VerifyRequestDTO {
  @IsString()
  @Length(6)
  code: string;

  @IsString()
  id: string;
}
