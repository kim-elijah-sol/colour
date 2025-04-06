import { Controller, Get, UseGuards } from '@nestjs/common';
import { TokenInfoDTO } from 'src/auth/dtos/TokenInfo.dto';
import { JwtOptionalAccessTokenGuard } from 'src/auth/guard/optionalAccessToken.guard';
import { TokenInfo } from 'src/decorator';
import { ColourService } from './colour.service';

@Controller('/colour')
export class ColourController {
  constructor(private readonly colourService: ColourService) {}

  @UseGuards(JwtOptionalAccessTokenGuard)
  @Get('/new')
  async findNewColours(@TokenInfo() tokenInfo: TokenInfoDTO) {
    const data = await this.colourService.findNewColours();

    return {
      statusCode: 200,
      success: true,
      data,
    };
  }
}
