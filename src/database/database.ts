import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import 'dotenv/config';
import { dbConfig } from '../config/db';
import { TypeOrmModule } from '@nestjs/typeorm';

export default registerAs('typeorm', () => {
  return {
    ...dbConfig,
    url: process.env.DB_URL,
  };
});

export const getTypeormModule = () =>
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => config.get('typeorm'),
    inject: [ConfigService],
  });
