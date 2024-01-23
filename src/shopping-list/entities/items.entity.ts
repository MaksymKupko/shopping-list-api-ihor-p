import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ItemCount } from './item-count.entity';

@Entity({
  name: 'items',
})
export class Items {
  @PrimaryGeneratedColumn('uuid', {
    name: 'item_id',
  })
  itemId: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 72,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'unit',
    type: 'varchar',
    length: 18,
    nullable: true,
  })
  unit: string | null;

  @Column({
    name: 'item_count_id',
    type: 'uuid',
    nullable: true,
  })
  itemCountId: string | null;

  @Column({
    name: 'price',
    type: 'smallint',
    nullable: true,
  })
  price: number | null;

  @ManyToOne(() => ItemCount, (itemCount) => itemCount.itemList)
  @JoinColumn({
    name: 'item_count_id',
    referencedColumnName: 'itemCountId',
  })
  itemCount: ItemCount;
}
