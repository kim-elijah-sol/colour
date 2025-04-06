import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ColourController } from './colour.controller';
import { ColourRepository } from './colour.repository';
import { ColourService } from './colour.service';

@Module({
  controllers: [ColourController],
  providers: [ColourService, ColourRepository, PrismaService],
  exports: [ColourService],
})
export class ColourModule {}
