import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { Episode } from './schemas/episode.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('episode')
@UseGuards(AuthGuard)
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) { }

  @Get()
  async findAll(): Promise<Episode[]> {
    try {
      return this.episodeService.findAll()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error finding episodes data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<Episode> {
    try {
      return this.episodeService.findOne(params.id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error finding episode data by id'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Post()
  async create(@Body() dto: CreateEpisodeDto): Promise<Episode> {
    try {
      return await this.episodeService.create(dto)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error creating episode'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Put(':id')
  async update(@Param() params: any, @Body() dto: UpdateEpisodeDto): Promise<Episode> {
    try {
      return await this.episodeService.update(params.id, dto)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error updating episode data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Delete(':id')
  async remove(@Param() params: any): Promise<Episode> {
    try {
      return await this.episodeService.remove(params.id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error deleting episode data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }
}
