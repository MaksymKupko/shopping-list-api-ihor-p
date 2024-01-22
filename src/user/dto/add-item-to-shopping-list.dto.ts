import { IsOptional, IsUUID, ValidateIf } from 'class-validator';

export class AddItemToShoppingListDto {
  @IsUUID(4)
  itemId: string;

  @IsOptional()
  @IsUUID(4)
  shoppingListId?: string;

  @ValidateIf((obj) => !obj.shoppingListId)
  @IsUUID(4)
  userId?: string;

  @ValidateIf((obj) => !obj.shoppingListId)
  @IsUUID(4)
  shoppingListName?: string;
}
