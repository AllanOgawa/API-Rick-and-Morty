import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './schemas/character.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('character')
@UseGuards(AuthGuard)
export class CharacterController {
  constructor(private readonly characterService: CharacterService) { }

  @Get()
  async findAll(): Promise<Character[]> {
    try {
      return this.characterService.findAll()

    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error finding characters data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<Character> {
    try {
      return this.characterService.findOne(params.id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error finding character data by id'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Post()
  async create(@Body() dto: CreateCharacterDto): Promise<Character> {
    try {
      return await this.characterService.create(dto)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error creating character'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Put(':id')
  async update(@Param() params: any, @Body() dto: UpdateCharacterDto): Promise<Character> {
    try {
      return await this.characterService.update(params.id, dto)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error updating character data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Delete(':id')
  async remove(@Param() params: any): Promise<Character> {
    try {
      return await this.characterService.remove(params.id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error deleting character data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }
}
