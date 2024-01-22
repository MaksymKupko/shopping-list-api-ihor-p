import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Items } from './items.entity';

@Entity({
  name: 'item_count',
})
export class ItemCount {
  @PrimaryGeneratedColumn('uuid', {
    name: 'item_count_id',
  })
  itemCountId: string;

  @Column({
    name: 'quantity',
    type: 'smallint',
    nullable: true,
  })
  quantity: number;

  @OneToMany(() => Items, (items) => items.itemCount)
  @JoinColumn({
    name: 'item_count_id',
    referencedColumnName: 'itemCountId',
  })
  itemList: Items[];
}
