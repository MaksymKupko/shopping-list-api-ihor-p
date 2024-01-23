import { IsUUID } from 'class-validator';

export class RemoveItemFromShoppingListDto {
  @IsUUID(4)
  itemId: string;

  @IsUUID(4)
  shoppingListId?: string;
}
