import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './entities/items.entity';
import { ItemCount } from './entities/item-count.entity';
import { ShoppingList } from './entities/shopping-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Items, ItemCount, ShoppingList])],
})
export class ShoppingListModule {}
