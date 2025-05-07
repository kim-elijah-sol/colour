import { IsBoolean } from 'class-validator';

export class FavouriteResponseDTO {
  @IsBoolean()
  favourite: boolean;
}
