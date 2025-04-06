import { Injectable } from '@nestjs/common';
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
}
