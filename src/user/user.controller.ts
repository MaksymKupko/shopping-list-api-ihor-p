import { Controller, Get, Query } from '@nestjs/common';
import { UserGetShoppingListDto } from './dto/user-get-shopping-list.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('shopping-list')
  getUserShoppingList(@Query() query: UserGetShoppingListDto) {
    return this.userService.getUserShoppingList(query);
  }
}
