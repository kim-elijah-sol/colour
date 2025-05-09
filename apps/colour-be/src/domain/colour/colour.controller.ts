import { ColourResponse } from '@colour/types';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TokenInfoDTO } from 'src/auth/dtos/TokenInfo.dto';
import { JwtAccessTokenGuard } from 'src/auth/guard/accessToken.guard';
import { JwtOptionalAccessTokenGuard } from 'src/auth/guard/optionalAccessToken.guard';
import { TokenInfo } from 'src/decorator';
import { ColourService } from './colour.service';
import { CreatePaletteRequestDTO } from './dtos/CreatePaletteRequest.dto';
import { CreatePaletteResponseDTO } from './dtos/CreatePaletteResponse.dto';
import { FavouriteResponseDTO } from './dtos/FavouriteResponse.dto';

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
    const alreadyColour = await this.colourService.findColourByColour(
      colour.join('')
    );

    if (alreadyColour !== null) {
      throw new ConflictException(this.colourService.getConflictMessage());
    }

    const data = await this.colourService.createPalette({
      userIdx,
      colour: colour,
    });

    return {
      statusCode: 201,
      success: true,
      data,
    };
  }

  @UseGuards(JwtAccessTokenGuard)
  @Patch('favourite/:colourIdx')
  async favourite(
    @TokenInfo() { idx: userIdx }: TokenInfoDTO,
    @Param('colourIdx') _colourIdx: string
  ): Promise<ColourResponse<FavouriteResponseDTO>> {
    const colourIdx = Number(_colourIdx);

    const favourite = await this.colourService.findFavourite(
      colourIdx,
      userIdx
    );

    if (favourite) {
      await this.colourService.deleteFavourite(
        colourIdx,
        userIdx,
        favourite.idx
      );
    } else {
      await this.colourService.createFavourite(colourIdx, userIdx);
    }

    return {
      statusCode: 200,
      success: true,
      data: {
        favourite: favourite ? false : true,
      },
    };
  }

  // will deprecate
  @Post('test')
  async test(@Body('colour') colours: string[][]) {
    for (const colour of colours) {
      await this.colourService.createPalette({
        colour: colour,
        userIdx: 2,
      });
    }
  }
}
