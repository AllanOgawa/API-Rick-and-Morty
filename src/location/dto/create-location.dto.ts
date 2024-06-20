import { IsString, IsNumber } from 'class-validator';

export class CreateLocationDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsString()
    type: string;

    @IsString()
    dimension: string;
}