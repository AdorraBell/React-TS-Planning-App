import axios, { AxiosResponse } from "axios";
import { IUser } from "types/types";


export const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axios.get<IUser[]>('/fakeUsers/users.json')
}
