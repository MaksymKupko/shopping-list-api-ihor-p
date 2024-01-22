import { arnoldBumsteadShoppingList, items } from '../mocks/items';

function insertIntoShoppingList() {
  const unionItems = [...items, ...arnoldBumsteadShoppingList];

  const values = unionItems
    .map(
      ({ name, unit, quantity }) =>
        `('${name}', ${unit ? `'${unit}'` : null}, ${quantity})`,
    )
    .join(',');

  return `INSERT INTO shopping_list VALUES ${values}`;
}

console.log(insertIntoShoppingList());

// INSERT INTO shopping_list VALUES (White paint, Gallon, 1),(Oil based primer, Gallon, 1),(Paint roller 1/2 inch nap, null, 2),(Paint roller tray liner, null, 10),(Quarter round molding, null, 10),(Gap filler foam, null, 2),(Faced R30 fiberglass inulation batt, null, 1),(All purpose joint compound, Gallon, 1),(Ceiling light fixture, null, 3),(Dimmer, null, 3),(Dimmer faceplate, null, 3),(Wiremold switch/receptacle box, null, 6),(Wiremold raceway, Feet, 4),(Utility knife, null, 2),(Utility knife replacement blades, null, 50),(Whey isolate protein powder, Pound, 5),(Chunk light tuna, null, 12),(Rotisserie chicken, null, 1),(Normandy vegetable blend, Pound, 4),(Eggs, undefined, 90),(2% reduced fat milk, Quart, 3),(Brown rice, Pound, 10),(Plain greek yogurt, Quart, 1),(Rolled oats, null, 1),(Multi-vitamins, null, 1)
