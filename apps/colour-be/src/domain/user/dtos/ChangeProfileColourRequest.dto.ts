import { IsString, Length } from 'class-validator';

export class ChangeProfileColourRequestDTO {
  @IsString()
  @Length(6)
  profileColour: string;
}
