import React from "react";
import LoginPage from "../pages/LoginPage";
import CalendarPage from "../pages/CalendarPage";
import DetailPage from "../pages/DetailPage";

export interface IRoute {
    path: string;
    element?: React.ReactElement;
    label?: string,
    key: number
}

export enum RouteNames {
    LOGIN_PAGE = '/login',
    CALENDAR_PAGE = '/calendar',
    DETAIL_EVENT = '/detail-event'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN_PAGE, element: <LoginPage/>, key: 0}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.CALENDAR_PAGE, element: <CalendarPage/>, key: 1},
    {path: RouteNames.DETAIL_EVENT, element: <DetailPage/>, key: 2},
]