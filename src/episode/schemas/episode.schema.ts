import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Character } from 'src/character/schemas/character.schema';

export type EpisodeSchemaDocument = HydratedDocument<Episode>;

@Schema({ timestamps: true })
export class Episode {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop()
    name: string;

    @Prop()
    air_date: string;

    @Prop()
    episode: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'characters' }] })
    characters: Character[];
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);