import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { ShoppingList } from '../shopping-list/shopping-list.entity';

@Entity({
  name: 'user_shopping_list',
})
export class UserShoppingList {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_shopping_list_id',
  })
  userShoppingListId: string;

  @Column({
    name: 'user_id',
    type: 'uuid',
    nullable: false,
  })
  userId: string;

  @Column({
    name: 'shopping_list_id',
    type: 'uuid',
    nullable: false,
  })
  shoppingListId: string;

  @ManyToOne(() => User, (user) => user.shoppingList)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'userId',
  })
  user: User;

  @ManyToOne(
    () => ShoppingList,
    (shoppingList) => shoppingList.userShoppingList,
  )
  @JoinColumn({
    name: 'shopping_list_id',
    referencedColumnName: 'shoppingListId',
  })
  shoppingList: ShoppingList;
}
