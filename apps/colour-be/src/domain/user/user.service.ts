import { Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { JoinRequestDTO } from './dtos/JoinRequest.dto';
import { LoginRequestDTO } from './dtos/LoginRequest.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUserByEmail(email: string) {
    return await this.userRepository.findUserByEmail(email);
  }

  async createVerificationEmail({
    email: requestEmail,
    password: _requestPassword,
  }: JoinRequestDTO) {
    const now = new Date();

    const requestPassword = SHA256(_requestPassword).toString();
    const id = SHA256(`${now.valueOf()}-${requestEmail}`).toString();
    const code = this.getVerificationEmailCode();
    const expiredAt = new Date(now.getTime() + 30 * 60 * 1000);

    console.log(id, code);

    return await this.userRepository.createVerificationEmail({
      requestEmail,
      requestPassword,
      id,
      code,
      expiredAt,
    });
  }

  async join(joinRequestDTO: JoinRequestDTO) {
    return await this.userRepository.createUser(joinRequestDTO);
  }

  async login(loginRequestDTO: LoginRequestDTO) {
    return await this.userRepository.findUserByIdAndPassword(loginRequestDTO);
  }

  getVerificationEmailCode(): string {
    const code = Math.floor(Math.random() * 1000000);
    return code.toString().padStart(6, '0');
  }
}
