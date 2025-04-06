import { Controller, Get } from '@nestjs/common';
import { ColourService } from './colour.service';

@Controller('/colour')
export class ColourController {
  constructor(private readonly colourService: ColourService) {}

  @Get('/new')
  async findNewColours() {
    const data = await this.colourService.findNewColours();

    return {
      statusCode: 200,
      success: true,
      data,
    };
  }
}
