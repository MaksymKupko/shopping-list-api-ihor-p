import { Injectable } from '@nestjs/common';
import { UserGetShoppingListDto } from './dto/user-get-shopping-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getUserShoppingList(query: UserGetShoppingListDto) {
    return this.userRepository
      .createQueryBuilder('u')
      .innerJoin('shoppingList', 'sl')
      .innerJoin('shopping_list_items', 'sli')
      .innerJoin('items', 'it')
      .innerJoin('items_count', 'itc')
      .where('u.userId = :userId', { userId: query.userId });
  }
}
