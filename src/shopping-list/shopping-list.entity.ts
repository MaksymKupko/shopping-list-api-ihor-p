import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { UserShoppingList } from '../user/user-shopping-list.entity';

@Entity({
  name: 'shopping_list',
})
export class ShoppingList {
  @PrimaryGeneratedColumn('uuid', {
    name: 'shopping_list_id',
  })
  shoppingListId: string;

  @Column({
    name: 'item_id',
    type: 'uuid',
    nullable: false,
  })
  itemId: string;

  @OneToMany(
    () => UserShoppingList,
    (userShoppingList) => userShoppingList.shoppingList,
  )
  @JoinColumn({
    name: 'shopping_list_id',
    referencedColumnName: 'shoppingListId',
  })
  userShoppingList: UserShoppingList;

  // @OneToMany(() => Items, (items) => items.shoppingList)
  // @JoinColumn({
  //   name: 'item_id',
  //   referencedColumnName: 'itemId',
  // })
  // items: Items[];
}
