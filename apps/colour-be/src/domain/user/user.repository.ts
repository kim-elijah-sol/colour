import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVerificationEmailDTO } from './dtos/CreateVerificationEmailRequest.dto';
import { LoginRequestDTO } from './dtos/LoginRequest.dto';
import { SignUpRequestDTO } from './dtos/SignUpRequest.dto';
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

  async createUser({ email, password }: SignUpRequestDTO) {
    return await this.prismaClient.user.create({
      data: {
        email,
        password,
      },
    });
  }

  async findUserByIdAndPassword({
    email,
    password,
  }: LoginRequestDTO): Promise<UserDTO | null> {
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
}
