import { Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { CreateUserDTO } from './dtos/CreateUser.dto';
import { CreateVerificationEmailParameterDTO } from './dtos/CreateVerificationEmailParameter.dto';
import { MeResponseDTO } from './dtos/MeResponse.dto';
import { SignInRequestDTO } from './dtos/SignInRequest.dto';
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
  }: CreateVerificationEmailParameterDTO) {
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

  async signUp({ email, password, profileColour }: CreateUserDTO) {
    return await this.userRepository.createUser({
      email,
      password: SHA256(password).toString(),
      profileColour,
    });
  }

  async signIn({ email, password }: SignInRequestDTO) {
    return await this.userRepository.findUserByIdAndPassword({
      email,
      password: SHA256(password).toString(),
    });
  }

  async findMyMe(idx: number): Promise<MeResponseDTO | null> {
    return await this.userRepository.findUserByMe(idx);
  }

  async changeEmail(currentEmail: string, newEmail: string) {
    return await this.userRepository.changeEmail(currentEmail, newEmail);
  }

  async findCurrentPasswordByUserIdx(userIdx: number) {
    return (await this.userRepository.findCurrentPasswordByUserIdx(userIdx))
      ?.password;
  }

  async changePasswordByUserIdx(userIdx: number, password: string) {
    return await this.userRepository.changePasswordByUserIdx(
      userIdx,
      SHA256(password).toString()
    );
  }

  async changeNicknameByUserIdx(userIdx: number, nickname: string | null) {
    return await this.userRepository.changeNicknameByUserIdx(userIdx, nickname);
  }

  async findUserByNickname(nickname: string) {
    return await this.userRepository.findUserByNickname(nickname);
  }

  getRandomRGBValue(): string {
    return (Math.floor(Math.random() * 155) + 100)
      .toString(16)
      .padStart(2, '0');
  }

  getVerificationEmailCode(): string {
    return `${this.getRandomRGBValue()}${this.getRandomRGBValue()}${this.getRandomRGBValue()}`.toUpperCase();
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
