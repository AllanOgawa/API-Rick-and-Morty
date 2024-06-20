import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './schemas/character.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CharacterService {
  constructor(@InjectModel(Character.name) private characterModel: Model<Character>) { }

  async findAll(): Promise<Character[]> {
    return await this.characterModel.find().exec()
  }

  async findOne(id: number): Promise<Character> {
    return await this.characterModel.findOne({ id: id })
  }

  async create(character: CreateCharacterDto): Promise<Character> {
    return await this.characterModel.create(character)
  }

  async update(id: number, character: UpdateCharacterDto): Promise<Character> {
    return await this.characterModel.findOneAndUpdate({ id: id }, character, { new: true })
  }

  async remove(id: number): Promise<Character> {
    return await this.characterModel.findOneAndDelete({ id: id })
  }
}
