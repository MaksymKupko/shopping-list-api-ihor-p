import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ShoppingList } from '../../shopping-list/entities/shopping-list.entity';

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

  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.user)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'userId',
  })
  shoppingList: ShoppingList;
}
