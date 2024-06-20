import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location } from './schemas/location.schema';

@Injectable()
export class LocationService {
  constructor(@InjectModel(Location.name) private locationModel: Model<Location>) { }

  async findAll(): Promise<Location[]> {
    return await this.locationModel.find().exec()
  }

  async findOne(id: number): Promise<Location> {
    return await this.locationModel.findOne({ id: id })
  }

  async create(location: CreateLocationDto): Promise<Location> {
    return await this.locationModel.create(location)
  }

  async update(id: number, location: UpdateLocationDto): Promise<Location> {
    return await this.locationModel.findOneAndUpdate({ id: id }, location, { new: true })
  }

  async remove(id: number): Promise<Location> {
    return await this.locationModel.findOneAndDelete({ id: id })
  }
}
