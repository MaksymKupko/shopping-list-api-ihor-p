import { DataSource } from 'typeorm';
import 'dotenv/config';

export const TestDataSource = new DataSource({
  type: 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  url: process.env.DB_URL,
  ssl: true,
});
