import { IsNumber } from 'class-validator';

export class CreatePaletteResponseDTO {
  @IsNumber()
  idx: number;
}
