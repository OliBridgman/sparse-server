import { config } from "./config";
import { IMain, IDatabase } from "pg-promise";
import pgPromise from "pg-promise";

const pgp: IMain = pgPromise({});

export const db: IDatabase<any> = pgp(config);
