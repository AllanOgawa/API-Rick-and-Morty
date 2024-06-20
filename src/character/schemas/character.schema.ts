import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CharacterSchemaDocument = HydratedDocument<Character>;

@Schema({ timestamps: true })
export class Character {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop()
    name: string;

    @Prop()
    status: string;

    @Prop()
    species: string;

    @Prop()
    type: string;

    @Prop()
    gender: string;

    @Prop()
    image: string;

    @Prop()
    origin: string;

    @Prop()
    location: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);