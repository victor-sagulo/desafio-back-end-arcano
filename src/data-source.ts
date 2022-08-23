import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import "reflect-metadata";

const prodDataSourceOptions: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  logging: true,
  entities: ["dist/src/entities/*/*.js"],
  migrations: ["dist/src/migrations/*.js"],
};

const devDataSourceOptions: DataSourceOptions = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: false,
  synchronize: false,
  logging: true,
  entities: ["dist/src/entities/*/*.ts"],
  migrations: ["dist/src/migrations/*.ts"],
};

let currentDataSourceOptions =
  process.env.NODE_ENV === "production"
    ? prodDataSourceOptions
    : devDataSourceOptions;

export const AppDataSource = new DataSource(currentDataSourceOptions);

if (process.env.NODE_ENV !== "test") {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data source initialized");
    })
    .catch((err) => {
      console.log("Error during the Data Source initialization", err);
    });
}
