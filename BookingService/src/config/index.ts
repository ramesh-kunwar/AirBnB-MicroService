// this file contains all the configuration for the app server to work
import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
  DB_HOST: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_PORT: number;
};
export function loadEnv() {
  dotenv.config();
}
loadEnv();

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT),
  DB_HOST: process.env.DB_HOST!,
  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,
  DB_NAME: process.env.DB_NAME!,
  DB_PORT: Number(process.env.DB_PORT),
};
