import { registerAs } from '@nestjs/config';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConfig = {
  type: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  url: process.env.DB_URL,
  logging: 'all',
  ssl: true,
} as PostgresConnectionOptions;

export default registerAs('typeorm', () => {
  return {
    ...dbConfig,
    url: process.env.DB_URL,
  };
});

// for dropDB script to work
export const TestDataSource = new DataSource({
  ...dbConfig,
});
