import { IsBoolean } from 'class-validator';

export class CheckEmailResponseDTO {
  @IsBoolean()
  isAlready: boolean;
}
