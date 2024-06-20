import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './schemas/location.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('location')
@UseGuards(AuthGuard)
export class LocationController {
  constructor(private readonly locationService: LocationService) { }

  @Get()
  async findAll(): Promise<Location[]> {
    try {
      return this.locationService.findAll()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error finding locations'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<Location> {
    try {
      return this.locationService.findOne(params.id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error finding location data by id'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Post()
  async create(@Body() dto: CreateLocationDto): Promise<Location> {
    try {
      return await this.locationService.create(dto)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error creating location'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Put(':id')
  async update(@Param() params: any, @Body() dto: UpdateLocationDto): Promise<Location> {
    try {
      return await this.locationService.update(params.id, dto)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error updating location data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }

  @Delete(':id')
  async remove(@Param() params: any): Promise<Location> {
    try {
      return await this.locationService.remove(params.id)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error deleting location data'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }
}
