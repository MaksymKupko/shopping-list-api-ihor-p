import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { UserGetShoppingListDto } from './dto/user-get-shopping-list.dto';
import { UserService } from './user.service';
import { AddItemToShoppingListDto } from './dto/add-item-to-shopping-list.dto';
import { RemoveItemFromShoppingListDto } from './dto/remove-item-from-shopping-list.dto';
import { GetUserShoppingList } from './types/user.types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('shopping-list')
  getUserShoppingList(
    @Query() query: UserGetShoppingListDto,
  ): Promise<GetUserShoppingList> {
    return this.userService.getUserShoppingList(query);
  }

  @Post('shopping-list')
  addItemToShoppingList(@Body() body: AddItemToShoppingListDto): Promise<void> {
    return this.userService.addItemToShoppingList(body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('shopping-list')
  removeItemFromShoppingList(
    @Body() body: RemoveItemFromShoppingListDto,
  ): Promise<void> {
    return this.userService.removeItemFromShoppingList(body);
  }
}
