import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../types/types";
import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActionsEnum.SET_USER, 
        payload: user
    }),
    setError: (error: string): SetErrorAction => ({
        type: AuthActionsEnum.SET_ERROR,
        payload: error
    }),
    setAuth: (isAuth: boolean): SetAuthAction => ({
        type: AuthActionsEnum.SET_AUTH,
        payload: isAuth
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AuthActionsEnum.SET_IS_LOADING,
        payload: isLoading
    }),

    login: (username: string, password: string) => 
        async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true));
                const response = axios.get<IUser[]>('../../../../public/users.json');
                const mockUser = (await response).data.find(
                    (user: IUser) => user.username === username && user.password === password
                )
                
                if(mockUser){
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(AuthActionCreators.setAuth(true));
                    dispatch(AuthActionCreators.setUser(mockUser));
                } else {
                    dispatch(AuthActionCreators.setError('Incorrect username or password'))
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            } catch (e) {
                dispatch(AuthActionCreators.setError('Request error'))
            }
    },

    logout: () => 
        async (dispatch: AppDispatch) => {
            try {

            } catch (e) {

            }
    }
}