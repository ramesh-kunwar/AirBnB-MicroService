// this file contains all the configuration for the app server to work
import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};
export function loadEnv() {
  dotenv.config();
}
loadEnv();

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 4000,
};
