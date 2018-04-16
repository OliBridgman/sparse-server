import { config } from "./config";
import { IMain, IDatabase, IOptions } from "pg-promise";
import pgPromise from "pg-promise";
import { IExtensions, EventsRepository } from "./repos";

const initOptions: IOptions<IExtensions> = {
  extend(obj: IExtensions, dc: any) {
    obj.events = new EventsRepository(obj, pgp);
  }
};

const pgp: IMain = pgPromise(initOptions);
export const db = <IDatabase<IExtensions> & IExtensions>pgp(config);
