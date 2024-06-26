import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Character, CharacterSchema } from './schemas/character.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule { }
