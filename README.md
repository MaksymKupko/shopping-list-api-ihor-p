## Before starting to code

1. Copy _.env.example_ file content into your local _.env_ file.
2. DB is already deployed on remote server and waiting for you :)
3. Drop DB: run `npm run dropDB` to be sure it's empty.
4. No migrations - your entities would be synchronized with DB automatically after TypeORM entities files being changed and saved.

---

## Instruction for the candidate

1. Create a model for shopping lists and items located in src/mocks/items.ts.

2. Store the shopping lists and items located in src/mocks/items.ts in the database.

3. Modify the database such that a price field can be stored for each item.

4. Create a model for the user.

5. User could have many shopping lists and many items in each list.

6. Create API endpoints to dynamically get a list of shopping lists and items for a particular user.

7. Create API endpoint that allows to add/remove items from shopping list. If shopping list is new - new shopping list should be created.

## Good luck!
