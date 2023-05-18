import React from "react";
import LoginPage from "src/pages/LoginPage";
import CalendarPage from "src/pages/CalendarPage";
import DetailPage from "src/pages/DetailPage";

export interface IRoute {
    path: string;
    element?: React.ReactElement;
    label?: string,
    key: number
}

export enum RouteNames {
    LOGIN_PAGE = '/login',
    CALENDAR_PAGE = '/calendar',
    DETAIL_PAGE = '/detail-page/:id'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN_PAGE, element: <LoginPage/>, key: 0}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.CALENDAR_PAGE, element: <CalendarPage/>, key: 1},
    {path: RouteNames.DETAIL_PAGE, element: <DetailPage/>, key: 2},
]