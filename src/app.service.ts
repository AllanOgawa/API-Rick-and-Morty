import { Injectable } from '@nestjs/common';
import { Character } from './character/schemas/character.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Episode } from './episode/schemas/episode.schema';
import { Location } from './location/schemas/location.schema';
import axios from 'axios';
import { CreateCharacterDto } from './character/dto/create-character.dto';
import { CreateEpisodeDto } from './episode/dto/create-episode.dto';
import { CreateLocationDto } from './location/dto/create-location.dto';

const link = 'https://rickandmortyapi.com/api/';

@Injectable()
export class AppService {
  @InjectModel(Character.name) private characterModel: Model<Character>;
  @InjectModel(Episode.name) private episodeModel: Model<Episode>;
  @InjectModel(Location.name) private locationModel: Model<Location>;

  async fetchApi(): Promise<any> {
    try {
      const character = await this.fetchAllData("character");
      const episode = await this.fetchAllData("episode");
      const location = await this.fetchAllData("location");

      const returnCharacter = await this.createCharacter(character);
      const returnEpisode = await this.createEpisode(episode);
      const returnLocation = await this.createLocation(location);

      return { characters: returnCharacter, episodes: returnEpisode, location: returnLocation };

    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }

  async fetchAllData(path: string): Promise<any> {
    try {
      let data = [];
      const pathInfo = await axios.get(link + path);
      const pathPageNum = pathInfo.data.info.pages;

      for (let page = 1; page <= pathPageNum; page++) {
        const response = await axios.get(link + path + '?page=' + page);
        data = data.concat(response.data.results);
      }

      return data;

    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }

  async createCharacter(characters: any): Promise<Character[]> {
    try {
      for (let i in characters) {
        const character = new CreateCharacterDto();
        character.id = characters[i].id;
        character.name = characters[i].name;
        character.status = characters[i].status;
        character.species = characters[i].species;
        character.type = characters[i].type;
        character.gender = characters[i].gender;
        character.image = characters[i].image;
        character.origin = characters[i].origin.name;
        character.location = characters[i].location.name;

        await this.characterModel.findOneAndUpdate(
          { id: character.id },
          { $set: character },
          { new: true, upsert: true }
        ).exec()
      }
      return await this.characterModel.find().exec();

    } catch (error) {
      throw new Error(`Error creating character data: ${error.message}`);
    }
  }

  async createEpisode(episodes: any): Promise<Episode[]> {
    try {
      for (let i in episodes) {
        let characters = [];

        for (let character in episodes[i].characters) {
          characters.push(await this.characterModel.findOne({ id: episodes[i].characters[character].slice(42) }));
        }

        const episode = new CreateEpisodeDto();
        episode.id = episodes[i].id;
        episode.name = episodes[i].name;
        episode.air_date = episodes[i].air_date;
        episode.episode = episodes[i].episode;
        episode.characters = characters;

        await this.episodeModel.findOneAndUpdate(
          { id: episode.id },
          { $set: episode },
          { new: true, upsert: true }
        ).exec()
      }
      return await this.episodeModel.find().exec();

    } catch (error) {
      throw new Error(`Error creating episode data: ${error.message}`);
    }
  }

  async createLocation(locations: any): Promise<Location[]> {
    try {
      for (let i in locations) {
        const location = new CreateLocationDto();
        location.id = locations[i].id;
        location.name = locations[i].name;
        location.type = locations[i].type;
        location.dimension = locations[i].dimension;

        await this.locationModel.findOneAndUpdate(
          { id: location.id },
          { $set: location },
          { new: true, upsert: true }
        ).exec()
      }
      return await this.locationModel.find().exec();

    } catch (error) {
      throw new Error(`Error creating location data: ${error.message}`);
    }
  }
}
