import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dbConfig from './config/db';
import { getTypeormModule } from './database/database';

@Module({
  imports: [ConfigModule.forRoot({ load: [dbConfig] }), getTypeormModule()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
