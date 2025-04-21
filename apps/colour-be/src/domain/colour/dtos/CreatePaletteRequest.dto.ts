import { ArrayMaxSize, ArrayMinSize, IsArray } from 'class-validator';

export class CreatePaletteRequestDTO {
  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  colour: string[];
}
