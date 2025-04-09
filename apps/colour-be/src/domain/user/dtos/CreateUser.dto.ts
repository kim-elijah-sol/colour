import { IsString, Length } from 'class-validator';
import { SignUpRequestDTO } from './SignUpRequest.dto';

export class CreateUserDTO extends SignUpRequestDTO {
  @IsString()
  @Length(6)
  profileColor: string;
}
