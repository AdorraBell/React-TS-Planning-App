import { IUser } from "src/types/types";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
    username: string
}

export enum AuthActionsEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
    SET_USERNAME = "SET_USERNAME"
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface SetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: IUser;
}

export interface SetIsLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

export interface SetUserName {
    type: AuthActionsEnum.SET_USERNAME,
    payload: string
}

export type AuthAction = 
    SetAuthAction |
    SetUserAction |
    SetIsLoadingAction |
    SetErrorAction |
    SetUserName;