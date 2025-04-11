import { IsDate, IsString } from 'class-validator';

export class CreateVerificationEmailDTO {
  @IsString()
  code: string;

  @IsString()
  id: string;

  @IsString()
  requestEmail: string;

  @IsString()
  requestPassword?: string;

  @IsDate()
  expiredAt: Date;
}
