import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ErrorSchemaDocument = HydratedDocument<Error>;

@Schema({ timestamps: true })
export class Error {
    @Prop()
    message: string;

    @Prop()
    stack: string;

    @Prop()
    context: string;
}

export const ErrorSchema = SchemaFactory.createForClass(Error);