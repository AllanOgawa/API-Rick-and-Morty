import { Module } from '@nestjs/common';
import { ErrorService } from './error.service';
import { ErrorController } from './error.controller';
import { Error, ErrorSchema } from './schemas/error.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Error.name, schema: ErrorSchema }])],
  controllers: [ErrorController],
  exports: [ErrorService],
  providers: [ErrorService],
})
export class ErrorModule { }
