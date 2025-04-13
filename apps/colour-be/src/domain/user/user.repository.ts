import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dtos/CreateUser.dto';
import { CreateVerificationEmailDTO } from './dtos/CreateVerificationEmailRequest.dto';
import { MeResponseDTO } from './dtos/MeResponse.dto';
import { SignInRequestDTO } from './dtos/SignInRequest.dto';
import { UserDTO } from './dtos/User.dto';
import { VerifyRequestDTO } from './dtos/VerifyRequest.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async findUserByEmail(email: string) {
    return await this.prismaClient.user.findUnique({
      select: {
        idx: true,
      },
      where: {
        email,
      },
    });
  }

  async createVerificationEmail(
    createVerificationEmailDTO: CreateVerificationEmailDTO
  ) {
    return await this.prismaClient.verificationEmail.create({
      data: createVerificationEmailDTO,
      select: {
        id: true,
      },
    });
  }

  async findVerificationEmail({ id, code }: VerifyRequestDTO) {
    const now = new Date();

    return await this.prismaClient.verificationEmail.findUnique({
      where: {
        id,
        code,
        expiredAt: {
          gt: now,
        },
      },
      select: {
        requestEmail: true,
        requestPassword: true,
        code: true,
      },
    });
  }

  async deleteVerificationEmailAtVerifySuccess({ id, code }: VerifyRequestDTO) {
    return await this.prismaClient.verificationEmail.delete({
      where: {
        id,
        code,
      },
    });
  }

  async createUser({ email, password, profileColour }: CreateUserDTO) {
    return await this.prismaClient.user.create({
      data: {
        email,
        password,
        profileColour,
      },
    });
  }

  async findUserByIdAndPassword({
    email,
    password,
  }: SignInRequestDTO): Promise<UserDTO | null> {
    return await this.prismaClient.user.findUnique({
      select: {
        idx: true,
        email: true,
      },
      where: {
        email,
        password,
      },
    });
  }

  async findUserByIdx(idx: number): Promise<UserDTO | null> {
    return await this.prismaClient.user.findUnique({
      select: {
        idx: true,
        email: true,
      },
      where: {
        idx,
      },
    });
  }

  async findUserByMe(idx: number): Promise<MeResponseDTO | null> {
    return await this.prismaClient.user.findUnique({
      select: {
        email: true,
        profileColour: true,
        nickname: true,
      },
      where: {
        idx,
      },
    });
  }

  async changeEmail(currentEmail: string, newEmail: string) {
    return await this.prismaClient.user.update({
      where: {
        email: currentEmail,
      },
      data: {
        email: newEmail,
        updatedAt: new Date(),
      },
    });
  }

  async findCurrentPasswordByUserIdx(userIdx: number) {
    return await this.prismaClient.user.findUnique({
      where: {
        idx: userIdx,
      },
      select: {
        password: true,
      },
    });
  }

  async changePasswordByUserIdx(userIdx: number, password: string) {
    return await this.prismaClient.user.update({
      where: {
        idx: userIdx,
      },
      data: {
        password,
        updatedAt: new Date(),
      },
    });
  }

  async changeNicknameByUserIdx(userIdx: number, nickname: string | null) {
    return await this.prismaClient.user.update({
      where: {
        idx: userIdx,
      },
      data: {
        nickname,
        updatedAt: new Date(),
      },
    });
  }

  async findUserByNickname(nickname: string) {
    return await this.prismaClient.user.findUnique({
      where: {
        nickname,
      },
      select: {
        nickname: true,
      },
    });
  }
}
