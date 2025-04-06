import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColourRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async findNewColours() {
    return await this.prismaClient.colour.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        idx: true,
        colour: true,
        favouriteCount: true,
        createdAt: true,
      },
    });
  }
}
