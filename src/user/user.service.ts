import { Injectable } from '@nestjs/common';
import { UserGetShoppingListDto } from './dto/user-get-shopping-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ShoppingList } from '../shopping-list/entities/shopping-list.entity';
import { AddItemToShoppingListDto } from './dto/add-item-to-shopping-list.dto';
import { RemoveItemFromShoppingListDto } from './dto/remove-item-from-shopping-list.dto';
import { GetUserShoppingList } from './types/user.types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(ShoppingList)
    private readonly shoppingRepository: Repository<ShoppingList>,
    private readonly dataSource: DataSource,
  ) {}

  async getUserShoppingList(
    query: UserGetShoppingListDto,
  ): Promise<GetUserShoppingList> {
    const data = await this.userRepository
      .createQueryBuilder('u')
      .select(
        `
        u.userId AS "userId",
        u.name AS "name",
        json_build_object(
          'shoppingListId', sl.shopping_list_id,
          'name', sl.name,
          'items', json_agg(
            json_build_object(
              'itemId', it.item_id,
              'name', it.name,
              'price', it.price,
              'unit', it.unit,
              'count', itc.quantity
            )
          )
        ) "shoppingList"
      `,
      )
      .innerJoin('u.shoppingList', 'sl')
      .innerJoin(
        'shopping_list_items',
        'sli',
        'sli.shopping_list_id = sl.shopping_list_id',
      )
      .innerJoin('items', 'it', 'sli.item_id = it.item_id')
      .innerJoin('item_count', 'itc', 'it.item_count_id = itc.item_count_id')
      .where('u.userId = :userId', { userId: query.userId })
      .groupBy('u.user_id')
      .addGroupBy('sl.shopping_list_id')
      .getRawOne();

    return {
      data,
    };
  }

  async addItemToShoppingList(
    options: AddItemToShoppingListDto,
  ): Promise<void> {
    if (!options.shoppingListId) {
      return this.addItemWithoutShoppingList(options);
    }

    return this.addItem(options);
  }

  async removeItemFromShoppingList(
    options: RemoveItemFromShoppingListDto,
  ): Promise<void> {
    await this.dataSource.query(
      'DELETE FROM shopping_list_items WHERE shopping_list_id = $1 AND item_id = $2',
      [options.shoppingListId, options.itemId],
    );
  }

  private async addItemWithoutShoppingList(
    options: AddItemToShoppingListDto,
  ): Promise<void> {
    const shoppingList = await this.shoppingRepository.save({
      name: options.shoppingListName,
      userId: options.userId,
    });

    return this.addItem({
      ...options,
      shoppingListId: shoppingList.shoppingListId,
    });
  }

  private async addItem(
    options: Pick<AddItemToShoppingListDto, 'shoppingListId' | 'itemId'>,
  ): Promise<void> {
    await this.dataSource.query(
      'INSERT INTO shopping_list_items(shopping_list_id, item_id) VALUES ($1, $2)',
      [options.shoppingListId, options.itemId],
    );
  }
}
