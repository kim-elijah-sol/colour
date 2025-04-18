import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class StudioProfileResponseDTO {
  @IsBoolean()
  isMe: boolean;

  @IsString()
  @IsOptional()
  nickname: string | null;

  @IsString()
  profileColour: string;

  @IsString()
  @IsOptional()
  introduce: string | null;
}
