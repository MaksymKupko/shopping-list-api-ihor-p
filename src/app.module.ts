import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import dbConfig from './config/db';
import { getTypeormModule } from './database/database';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [dbConfig] }),
    getTypeormModule(),
    ShoppingListModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
