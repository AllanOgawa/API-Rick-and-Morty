import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Episode } from './schemas/episode.schema';

@Injectable()
export class EpisodeService {
  constructor(@InjectModel(Episode.name) private episodeModel: Model<Episode>) { }

  async findAll(): Promise<Episode[]> {
    return await this.episodeModel.find().exec()
  }

  async findOne(id: number): Promise<Episode> {
    return await this.episodeModel.findOne({ id: id })
  }

  async create(episode: CreateEpisodeDto): Promise<Episode> {
    return await this.episodeModel.create(episode)
  }

  async update(id: number, episode: UpdateEpisodeDto): Promise<Episode> {
    return await this.episodeModel.findOneAndUpdate({ id: id }, episode, { new: true })
  }

  async remove(id: number): Promise<Episode> {
    return await this.episodeModel.findOneAndDelete({ id: id })
  }
}
