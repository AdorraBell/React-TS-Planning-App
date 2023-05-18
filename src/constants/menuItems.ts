import { RouteNames } from "../router";

interface IMenu {
    path?: string,
    label: string,
    key: number
}

export const publicMenuItems: IMenu[] = [
    {path: RouteNames.LOGIN_PAGE, label: 'Log in', key: 0}
]

export const privateMenuItems: IMenu[] = [
    {path: RouteNames.CALENDAR_PAGE, label: 'Calendar', key: 1},
    {label: 'Log out', key: 3}
]