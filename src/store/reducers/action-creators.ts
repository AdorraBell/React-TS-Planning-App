import { AuthActionCreators } from "src/store/reducers/auth/action-creators";
import { EventActionCreators } from "src/store/reducers/event/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}