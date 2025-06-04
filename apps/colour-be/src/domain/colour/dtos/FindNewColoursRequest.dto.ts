import { IsOptional, IsString } from 'class-validator';

export class FindNewColourRequestDTO {
  @IsString()
  @IsOptional()
  lastId?: string;
}
