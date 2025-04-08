import { Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { SignInRequestDTO } from './dtos/SignInRequest.dto';
import { SignUpRequestDTO } from './dtos/SignUpRequest.dto';
import { VerifyRequestDTO } from './dtos/VerifyRequest.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUserByEmail(email: string) {
    return await this.userRepository.findUserByEmail(email);
  }

  async createVerificationEmail({
    email: requestEmail,
    password: requestPassword,
  }: SignUpRequestDTO) {
    const id = this.getVerificationEmailId(requestEmail);
    const code = this.getVerificationEmailCode();
    const expiredAt = this.getExpiredDate();

    return await this.userRepository.createVerificationEmail({
      requestEmail,
      requestPassword,
      id,
      code,
      expiredAt,
    });
  }

  async findVerificationEmail(verifyRequestDTO: VerifyRequestDTO) {
    return await this.userRepository.findVerificationEmail(verifyRequestDTO);
  }

  async deleteVerificationEmailAtVerifySuccess(
    verifyRequestDTO: VerifyRequestDTO
  ) {
    return await this.userRepository.deleteVerificationEmailAtVerifySuccess(
      verifyRequestDTO
    );
  }

  async signUp({ email, password }: SignUpRequestDTO) {
    return await this.userRepository.createUser({
      email,
      password: SHA256(password).toString(),
    });
  }

  async signIn({ email, password }: SignInRequestDTO) {
    return await this.userRepository.findUserByIdAndPassword({
      email,
      password: SHA256(password).toString(),
    });
  }

  getVerificationEmailCode(): string {
    const code = Math.floor(Math.random() * 1000000);
    return code.toString().padStart(6, '0');
  }

  getExpiredDate(): Date {
    const now = new Date();

    return new Date(now.getTime() + 30 * 60 * 1000);
  }

  getVerificationEmailId(email: string) {
    const now = new Date();

    return SHA256(`${now.valueOf()}-${email}`).toString();
  }
}
