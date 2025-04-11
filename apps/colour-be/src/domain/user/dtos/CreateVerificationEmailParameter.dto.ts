import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateVerificationEmailParameterDTO {
    @IsEmail()
    @MaxLength(50)
    readonly email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(16)
    readonly password?: string;
}