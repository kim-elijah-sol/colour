import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';

class HexColorDTO {
  @IsString()
  @Matches(/^[0-9a-fA-F]{6}$/)
  value: string;
}

export class CreatePaletteRequestDTO {
  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  @ValidateNested({ each: true })
  @Type(() => HexColorDTO)
  colour: HexColorDTO[];
}
