import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { Episode, EpisodeSchema } from './schemas/episode.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Episode.name, schema: EpisodeSchema }])],
  controllers: [EpisodeController],
  providers: [EpisodeService],
})
export class EpisodeModule { }
