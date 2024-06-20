import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type LocationSchemaDocument = HydratedDocument<Location>;

@Schema({ timestamps: true })
export class Location {
    @Prop({ required: true, unique: true })
    id: number;

    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    dimension: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);