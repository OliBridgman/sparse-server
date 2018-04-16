import { EventsRepository } from "./events";

// Database Interface Extensions:
interface IExtensions {
  events: EventsRepository;
}

export { IExtensions, EventsRepository };
