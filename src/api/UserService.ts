import axios, { AxiosResponse } from "axios";
import { IUser } from "src/types/types";


export const getUsers = (): Promise<AxiosResponse<IUser[]>> => {
    return axios.get<IUser[]>('/fakeUsers/users.json')
}
