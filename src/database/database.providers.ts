import { TestDataSource } from './database.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return TestDataSource.initialize();
    },
  },
];
