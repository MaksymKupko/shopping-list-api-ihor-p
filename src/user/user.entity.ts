import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { UserShoppingList } from './user-shopping-list.entity';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_id',
  })
  userId: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  name: string;

  @OneToMany(() => UserShoppingList, (shoppingList) => shoppingList.user)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'userId',
  })
  shoppingList: UserShoppingList;
}
