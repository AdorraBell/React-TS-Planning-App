import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";
import DetailEvent from "../pages/DetailEvent";

export interface IRoute {
    path: string;
    element?: React.ReactElement;
    label?: string,
    key: number
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/event',
    DETAIL_EVENT = '/detail-event'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login/>, key: 0}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, element: <Event/>, key: 1},
    {path: RouteNames.DETAIL_EVENT, element: <DetailEvent/>, key: 2},
]