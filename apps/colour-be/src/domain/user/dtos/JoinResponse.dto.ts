import { IsString } from 'class-validator';

export class JoinResponseDTO {
  @IsString()
  verificationId: string;
}
