import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColourRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  async findNewColours(userIdx: number, lastId?: number) {
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
      take: 20,
      skip: lastId ? 1 : 0,
      ...(lastId && { cursor: { idx: lastId } }),
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

  async findFavourite(colourIdx: number, userIdx: number) {
    return await this.prismaClient.favourite.findFirst({
      select: {
        idx: true,
      },
      where: {
        colourIdx,
        userIdx,
      },
    });
  }

  async increaseFavouriteCount(colourIdx: number) {
    return await this.prismaClient.colour.update({
      where: {
        idx: colourIdx,
      },
      data: {
        favouriteCount: {
          increment: 1,
        },
      },
    });
  }

  async decreaseFavouriteCount(colourIdx: number) {
    return await this.prismaClient.colour.update({
      where: {
        idx: colourIdx,
      },
      data: {
        favouriteCount: {
          decrement: 1,
        },
      },
    });
  }

  async createFavourite(colourIdx: number, userIdx: number) {
    return await this.prismaClient.favourite.create({
      data: {
        userIdx,
        colourIdx,
      },
    });
  }

  async deleteFavourite(
    favouriteIdx: number,
    colourIdx: number,
    userIdx: number
  ) {
    return await this.prismaClient.favourite.delete({
      where: {
        idx: favouriteIdx,
        colourIdx,
        userIdx,
      },
    });
  }

  async findColourByColour(colour: string) {
    return await this.prismaClient.colour.findFirst({
      where: {
        colour,
      },
      select: {
        idx: true,
      },
    });
  }

  async findFavouriteColour(userIdx: number) {
    return await this.prismaClient.favourite.findMany({
      where: {
        userIdx,
      },
      orderBy: {
        idx: 'desc',
      },
      include: {
        colour: true,
      },
    });
  }
}
