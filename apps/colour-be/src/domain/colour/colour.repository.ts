import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColourRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async findNewColours(userIdx: number) {
    return await this.prismaClient.colour.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        idx: true,
        colour: true,
        favouriteCount: true,
        createdAt: true,
        favourite: {
          where: {
            userIdx,
          },
          select: {
            idx: true,
          },
        },
      },
    });
  }

  async createPalette(data: {
    userIdx: number;
    colour: string;
    colourNames: string;
  }) {
    return await this.prismaClient.colour.create({
      data: {
        ...data,
        favouriteCount: 0,
      },
      select: {
        idx: true,
      },
    });
  }
}
