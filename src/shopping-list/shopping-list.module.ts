import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { ItemCount } from './item-count.entity';
import { ShoppingList } from './shopping-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Items, ItemCount, ShoppingList])],
})
export class ShoppingListModule {}
