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

  async createVerificationEmail(joinRequestDTO: JoinRequestDTO) {
    const now = new Date();

    return await this.userRepository.createVerificationEmail({
      requestEmail: joinRequestDTO.email,
      requestPassword: SHA256(joinRequestDTO.password).toString(),
      id: SHA256(`${now.valueOf()}-${joinRequestDTO.email}`).toString(),
      code: this.getVerificationEmailCode(),
      expiredAt: new Date(now.getTime() + 30 * 60 * 1000)
    })
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
