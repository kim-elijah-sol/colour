import { IsString, MaxLength } from 'class-validator';

export class ChangeIntroduceRequestDTO {
  @IsString()
  @MaxLength(300)
  introduce: string;
}
