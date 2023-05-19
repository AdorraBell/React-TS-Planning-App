import { IEvent, IUser } from "src/types/types";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "src/store/reducers/event/types";
import { AppDispatch } from "src/store";
import { getUsers } from "src/api/UserService";
import { deleteEventById } from "src/helpers/deleteEventById";

export const EventActionCreators = {

    setGuests: (payload: IUser[]): SetGuestsAction => ({
        type: EventActionEnum.SET_GUESTS, 
        payload
    }),

    setEvents: (payload: IEvent[]): SetEventsAction => ({
        type: EventActionEnum.SET_EVENTS,
        payload
    }),

    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = getUsers();
            const guests = (await response).data;
            dispatch(EventActionCreators.setGuests(guests));
        } catch (e) {
            console.log(e);
        }
    },

    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = JSON.parse(localStorage.getItem("events") || "[]") as IEvent[];
            events.push(event);
            dispatch(EventActionCreators.setEvents(events));
            localStorage.setItem("events", JSON.stringify(events));
        } catch (e) {
            console.log(e);
        }
    },
    
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = JSON.parse(localStorage.getItem("events") || "[]") as IEvent[];
            const currentUserEvents = events.filter(ev => 
                ev.author === username || ev.guest === username
            );
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {

        }
    },


    deleteEvent: (id: number, currentUserEvents: IEvent[]) => async (dispatch: AppDispatch) => {
        let events = JSON.parse(localStorage.getItem("events") || "[]") as IEvent[];
        events = deleteEventById(events, id);
        localStorage.setItem("events", JSON.stringify(events));
        const newCurrentUserEvents = deleteEventById(currentUserEvents, id);
        dispatch(EventActionCreators.setEvents(newCurrentUserEvents));
    }
}