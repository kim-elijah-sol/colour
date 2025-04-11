import { IsEmail } from "class-validator";

export class ChangeEmailRequestDTO {
    @IsEmail()
    readonly email: string
}