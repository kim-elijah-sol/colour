import { LAB, RGB } from '@colour/types';
import { Injectable } from '@nestjs/common';
import { COLOUR_NAMES } from 'src/utils';
import { ColourRepository } from './colour.repository';

@Injectable()
export class ColourService {
  constructor(private readonly colourRepository: ColourRepository) {}

  async findNewColours() {
    return (await this.colourRepository.findNewColours()).map((it) => ({
      ...it,
      colour: this.colourSlice(it.colour),
    }));
  }

  colourSlice(colour: string): string[] {
    const chunks: string[] = [];

    for (let i = 0; i < colour.length; i += 6) {
      chunks.push(colour.slice(i, i + 6));
    }
    return chunks;
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
