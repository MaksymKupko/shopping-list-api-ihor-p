import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ShoppingList } from '../shopping-list/entities/shopping-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ShoppingList])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
