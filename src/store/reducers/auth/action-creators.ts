import { AppDispatch } from "src/store";
import { IUser } from "src/types/types";
import {AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction, SetUserName} from "src/store/reducers/auth/types";
import { getUsers } from "src/api/UserService";

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
    setUserName: (username: string): SetUserName => ({
        type: AuthActionsEnum.SET_USERNAME,
        payload: username
    }),

    login: (username: string, password: string, remember?:boolean) => 
        async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true));
                setTimeout( async () => {
                    const response = getUsers(); 
                    const mockUser = (await response).data.find(
                        (user: IUser) => user.username === username && user.password === password
                    )
                    if(mockUser){
                        if(remember){
                            localStorage.setItem("auth", JSON.stringify(true));
                            localStorage.setItem("username", mockUser.username);
                        }else {
                            sessionStorage.setItem("auth", JSON.stringify(true));
                            sessionStorage.setItem("username", mockUser.username);
                        }
                        dispatch(AuthActionCreators.setUser(mockUser));
                        dispatch(AuthActionCreators.setAuth(true));
                        dispatch(AuthActionCreators.setUserName(mockUser.username));
                    } else {
                        dispatch(AuthActionCreators.setError('Incorrect username or password'))
                    }
                    dispatch(AuthActionCreators.setIsLoading(false));
                }, 500)    
                
            } catch (e) {
                dispatch(AuthActionCreators.setError('Request error'))
            }
    },

    logout: () => 
        async (dispatch: AppDispatch) => {
            sessionStorage.removeItem("auth");
            sessionStorage.removeItem("username");
            localStorage.removeItem("auth");
            localStorage.removeItem("username");
            dispatch(AuthActionCreators.setUser({} as IUser));
            dispatch(AuthActionCreators.setAuth(false)); 
            dispatch(AuthActionCreators.setUserName(''));
    }
}