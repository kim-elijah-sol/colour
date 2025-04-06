import { Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { PrismaService } from 'src/prisma/prisma.service';
import { JoinRequestDTO } from './dtos/JoinRequest.dto';
import { LoginRequestDTO } from './dtos/LoginRequest.dto';
import { UserDTO } from './dtos/User.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async createUser({ email, password }: JoinRequestDTO) {
    return await this.prismaClient.user.create({
      data: {
        email,
        password: SHA256(password).toString(),
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
        password: SHA256(password).toString(),
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
