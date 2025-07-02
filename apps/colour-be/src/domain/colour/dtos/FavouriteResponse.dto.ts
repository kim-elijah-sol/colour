import { IsBoolean, IsNumber } from 'class-validator';

export class FavouriteResponseDTO {
  @IsBoolean()
  favourite: boolean;

  @IsNumber()
  colourIdx: number;
}
