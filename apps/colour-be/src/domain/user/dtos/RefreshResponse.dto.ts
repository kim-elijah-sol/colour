import { IsString } from 'class-validator';

export class RefreshResponseDTO {
  @IsString()
  accessToken: string;
}
