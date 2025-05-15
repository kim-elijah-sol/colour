import { LAB, RGB } from '@colour/types';
import { Injectable } from '@nestjs/common';
import { COLOUR_NAMES } from 'src/utils';
import { hexToRgb } from '../../../../../packages/fx/dist';
import { ColourRepository } from './colour.repository';

@Injectable()
export class ColourService {
  constructor(private readonly colourRepository: ColourRepository) {}

  async findNewColours(userIdx: number) {
    return (await this.colourRepository.findNewColours(userIdx)).map((it) => ({
      idx: it.idx,
      createdAt: it.createdAt,
      colour: this.colourSlice(it.colour),
      favouriteCount: it.favouriteCount,
      isFavourite: it.favourite.length !== 0,
    }));
  }

  async createPalette({
    userIdx,
    colour,
  }: {
    userIdx: number;
    colour: string[];
  }) {
    return await this.colourRepository.createPalette({
      colour: this.colourJoin(colour),
      colourNames: this.colourNamesJoin(
        colour.map((it) => this.findColourNameByRGB(hexToRgb(it)))
      ),
      userIdx,
    });
  }

  async findFavourite(colourIdx: number, userIdx: number) {
    return await this.colourRepository.findFavourite(colourIdx, userIdx);
  }

  async createFavourite(colourIdx: number, userIdx: number) {
    await this.colourRepository.createFavourite(colourIdx, userIdx);
    return await this.colourRepository.increaseFavouriteCount(colourIdx);
  }

  async deleteFavourite(
    colourIdx: number,
    userIdx: number,
    favouriteIdx: number
  ) {
    await this.colourRepository.deleteFavourite(
      favouriteIdx,
      colourIdx,
      userIdx
    );
    return await this.colourRepository.decreaseFavouriteCount(colourIdx);
  }

  async findColourByColour(colour: string) {
    return await this.colourRepository.findColourByColour(colour);
  }

  async findFavouriteColour(userIdx: number) {
    return (await this.colourRepository.findFavouriteColour(userIdx))
      .map((it) => it.colour)
      .map((it) => ({
        idx: it.idx,
        colour: this.colourSlice(it.colour),
        createdAt: it.createdAt,
        favouriteCount: it.favouriteCount,
        isFavourite: true,
      }));
  }

  getConflictMessage() {
    const messages = [
      "Whoa! This is practically the colour lottery 🎉 Someone's already created the exact same combo!",
      'This palette already exists in the world… Was it chance, or was it destiny? ✨',
      'That exact combo’s already out there. Do you know the odds of picking the same four colours? Neither do we!',
      "Hold on a sec… you've made this exact combo again?! Brilliant! But it’s already been added 😅",
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }

  colourJoin(colour: string[]) {
    return colour.join('');
  }

  colourSlice(colour: string): string[] {
    const chunks: string[] = [];

    for (let i = 0; i < colour.length; i += 6) {
      chunks.push(colour.slice(i, i + 6));
    }
    return chunks;
  }

  colourNamesJoin(colourNames: string[]) {
    return `|${colourNames.join('|')}|`;
  }

  colourNamesSlice(colourNames: string) {
    return colourNames.substring(1, colourNames.length - 1).split('|');
  }

  findColourNameByRGB(colour: RGB) {
    let closestName = '';
    let smallestDistance = Infinity;

    for (const { name, rgb } of COLOUR_NAMES) {
      const distance = Math.sqrt(
        Math.pow(colour[0] - rgb[0], 2) +
          Math.pow(colour[1] - rgb[1], 2) +
          Math.pow(colour[2] - rgb[2], 2)
      );

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestName = name;
      }
    }

    return closestName;
  }

  findColourNameByLAB(colour: LAB) {
    let closestName = '';
    let smallestDistance = Infinity;

    for (const { name, lab } of COLOUR_NAMES) {
      const deltaE = Math.sqrt(
        Math.pow(colour[0] - lab[0], 2) +
          Math.pow(colour[1] - lab[1], 2) +
          Math.pow(colour[2] - lab[2], 2)
      );

      if (deltaE < smallestDistance) {
        smallestDistance = deltaE;
        closestName = name;
      }
    }

    return closestName;
  }
}
