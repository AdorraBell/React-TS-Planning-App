import { RouteNames } from "../router";


interface IMenu {
    path?: string,
    label: string,
    key: number
}

export const publicMenuItems: IMenu[] = [
    {path: RouteNames.LOGIN, label: 'Login', key: 0}
]

export const privateMenuItems: IMenu[] = [
    {path: RouteNames.EVENT, label: 'Event', key: 1},
    {path: RouteNames.DETAIL_EVENT, label: 'Detail', key: 2},
    {label: 'Log out', key: 3}
]