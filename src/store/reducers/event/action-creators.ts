import { IEvent, IUser } from "types/types";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import { AppDispatch } from "store";
import { getUsers } from "../../../api/UserService";

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
            const response = getUsers(); //await axios.get('./fakeUsers/users.json')
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
                ev.author === username || ev.guest === username);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (e) {

        }
    }
}