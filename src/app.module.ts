import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterModule } from './character/character.module';
import { LocationModule } from './location/location.module';
import { EpisodeModule } from './episode/episode.module';
import { Character, CharacterSchema } from './character/schemas/character.schema';
import { Episode, EpisodeSchema } from './episode/schemas/episode.schema';
import { Location, LocationSchema } from './location/schemas/location.schema';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ErrorModule } from './error/error.module';
import { Error, ErrorSchema } from './error/schemas/error.schema';
import { ErrorsInterceptor } from './common/errors.interceptor';

@Module({
  imports: [
    CharacterModule,
    LocationModule,
    EpisodeModule,
    UsersModule,
    AuthModule,
    ErrorModule,
    MongooseModule.forRoot('mongodb://localhost:27017/rickandmorty'),
    MongooseModule.forFeature([
      { name: Character.name, schema: CharacterSchema },
      { name: Episode.name, schema: EpisodeSchema },
      { name: Location.name, schema: LocationSchema },
      { name: Error.name, schema: ErrorSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'APP_INTERCEPTOR',
      useClass: ErrorsInterceptor,
    }
  ],
})

export class AppModule { }
