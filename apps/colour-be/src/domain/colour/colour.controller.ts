import { ColourResponse } from '@colour/types';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { TokenInfoDTO } from 'src/auth/dtos/TokenInfo.dto';
import { JwtAccessTokenGuard } from 'src/auth/guard/accessToken.guard';
import { JwtOptionalAccessTokenGuard } from 'src/auth/guard/optionalAccessToken.guard';
import { TokenInfo } from 'src/decorator';
import { ColourService } from './colour.service';
import { CreatePaletteRequestDTO } from './dtos/CreatePaletteRequest.dto';
import { CreatePaletteResponseDTO } from './dtos/CreatePaletteResponse.dto';

@Controller('colour')
export class ColourController {
  constructor(private readonly colourService: ColourService) {}

  @UseGuards(JwtOptionalAccessTokenGuard)
  @Get('new')
  async findNewColours(@TokenInfo() tokenInfo: TokenInfoDTO) {
    const data = await this.colourService.findNewColours(tokenInfo.idx ?? 0);

    return {
      statusCode: 200,
      success: true,
      data,
    };
  }

  @UseGuards(JwtAccessTokenGuard)
  @Post('palette')
  async createPalette(
    @TokenInfo() { idx: userIdx }: TokenInfoDTO,
    @Body() { colour }: CreatePaletteRequestDTO
  ): Promise<ColourResponse<CreatePaletteResponseDTO>> {
    const data = await this.colourService.createPalette({
      userIdx,
      colour: colour as unknown as string[],
    });

    return {
      statusCode: 201,
      success: true,
      data,
    };
  }
}
