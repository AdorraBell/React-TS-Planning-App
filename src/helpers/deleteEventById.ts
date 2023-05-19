import { IEvent } from "src/types/types";

export const deleteEventById = (eventsList: IEvent[], deletedEventId: number) => {
    const newEventsList = [...eventsList.filter(ev => 
        ev.id !== deletedEventId
    )]
    return newEventsList;
}