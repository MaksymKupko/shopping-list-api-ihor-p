export type GetUserShoppingList = {
  data: {
    userId: string;
    name: string;
    shoppingList: {
      shoppingListId: string;
      name: string;
      items: {
        itemId: string;
        name: string;
        price: number;
        unit: string | null;
        count: number;
      }[];
    };
  };
};
