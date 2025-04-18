import { IsString } from 'class-validator';

export class StudioProfileRequestDTO {
  @IsString()
  nickname: string;
}
