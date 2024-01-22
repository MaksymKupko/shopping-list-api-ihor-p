import { IsUUID } from 'class-validator';

export class UserGetShoppingListDto {
  @IsUUID(4)
  userId: string;
}
