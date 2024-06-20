import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Error } from './schemas/error.schema';

@Injectable()
export class ErrorService {
  constructor(@InjectModel(Error.name) private errorModel: Model<Error>) { }

  async findAll(): Promise<Error[]> {
    return await this.errorModel.find().exec()
  }

  async create(message: string, stack: string, context: string): Promise<Error> {
    return await this.errorModel.create({ message, stack, context })
  }
}
