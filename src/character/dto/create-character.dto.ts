import { IsString, IsNumber } from 'class-validator';

export class CreateCharacterDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    status: string;

    @IsString()
    species: string;

    @IsString()
    type: string;

    @IsString()
    gender: string;

    @IsString()
    image: string;

    @IsString()
    origin: string;

    @IsString()
    location: string;
}
