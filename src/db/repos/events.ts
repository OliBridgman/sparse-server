import { IDatabase, IMain, ColumnSet } from "pg-promise";
import { IResult } from "pg-promise/typescript/pg-subset";

interface EventRequest {
  cid: string;
  type: string;
  payload: object;
}

interface EventResponse {
  id: number;
  cid: string;
  type: string;
  payload: object;
  created_at: Date;
}

export class EventsRepository {
  constructor(db: any, pgp: IMain) {
    this.db = db;
    this.pgp = pgp;
  }

  private db: IDatabase<any>;

  private pgp: IMain;

  // Adds a new event, and returns the new record
  add(event: EventRequest): Promise<EventResponse> {
    return this.db.one(
      "INSERT INTO events (cid, type, payload) VALUES(${cid}, ${type}, ${payload}) RETURNING *",
      event
    );
  }

  // Returns all event records
  all(): Promise<EventResponse[]> {
    return this.db.any("SELECT * FROM events");
  }
}
