import { IsString } from 'class-validator';

export class CancelAccountRequestDTO {
  @IsString()
  password: string;
}
