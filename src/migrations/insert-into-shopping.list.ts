import { arnoldBumsteadShoppingList, items } from '../mocks/items';

function insertIntoShoppingList() {
  const unionItems = [...items, ...arnoldBumsteadShoppingList];

  const values = unionItems
    .map(
      ({ name, unit }) =>
        `('${name}', ${unit ? `'${unit}'` : null}, ${Math.round(
          Math.random() * 100,
        )})`,
    )
    .join(',');

  return `INSERT INTO shopping_list(name, unit, price) VALUES ${values}`;
}

console.log(insertIntoShoppingList());
