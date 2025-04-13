import { IsOptional, IsString } from 'class-validator';

export class ChangeNicknameRequestDTO {
  @IsString()
  @IsOptional()
  nickname: string | null;
}
