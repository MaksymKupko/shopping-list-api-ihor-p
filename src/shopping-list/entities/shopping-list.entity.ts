import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Items } from './items.entity';

@Entity({
  name: 'shopping_list',
})
export class ShoppingList {
  @PrimaryGeneratedColumn('uuid', {
    name: 'shopping_list_id',
  })
  shoppingListId: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'user_id',
    type: 'uuid',
    nullable: false,
  })
  userId: string;

  @ManyToOne(() => User, (user) => user.shoppingList)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'userId',
  })
  user: User;

  @ManyToMany(() => Items)
  @JoinTable({
    name: 'shopping_list_items',
    joinColumn: {
      name: 'shopping_list_id',
      referencedColumnName: 'shoppingListId',
    },
    inverseJoinColumn: { name: 'item_id', referencedColumnName: 'itemId' },
  })
  items: Items[];
}
