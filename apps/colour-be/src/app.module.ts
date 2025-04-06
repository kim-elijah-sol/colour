import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColourModule } from './domain/colour/colour.module';

@Module({
  imports: [ColourModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
