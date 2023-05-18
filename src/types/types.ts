
export interface IUser {
    username: string,
    password: string,
}

export interface IEvent {
    author: string,
    guest: string | null,
    date: string,
    eventName: string,
    eventDescription: string,
    id: number,
    eventTheme: string
}

export interface IEventTheme {
    name: string,
    value: string
}