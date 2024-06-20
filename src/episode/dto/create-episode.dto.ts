import { IsString, IsNumber, IsObject } from 'class-validator';
import { Character } from 'src/character/schemas/character.schema';

export class CreateEpisodeDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    air_date: string;

    @IsString()
    episode: string;

    @IsObject()
    characters: Character[];
}
