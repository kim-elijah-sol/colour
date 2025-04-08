import { IsString } from 'class-validator';

export class SignUpResponseDTO {
  @IsString()
  verificationId: string;
}
