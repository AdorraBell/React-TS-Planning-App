import { IEvent, IUser } from "types/types";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import { AppDispatch } from "store";
import axios from "axios";

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
            const guests = await axios.get('./fakeUsers/users.json')
        } catch (e) {
            console.log(e);
        }
    }
}