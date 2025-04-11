import { IsString, MaxLength, MinLength } from 'class-validator';

export class ChangePasswordRequestDTO {
  @IsString()
  @MinLength(8)
  @MaxLength(16)
  readonly currentPassword: string;

  @IsString()
  @MinLength(8)
  @MaxLength(16)
  readonly newPassword: string;
}
