import { FC } from "react";
import { Col } from 'antd';
import { IEvent } from "src/types/types";
import EventBlock from "./EventBlock";


interface EventsLisrProps {
    currentEvents: IEvent[],
    deleteEvent: (e: React.MouseEvent<HTMLElement>) => void
}

const EventsList: FC<EventsLisrProps> = ({currentEvents, deleteEvent}) => {

    return ( 
        <Col className="w100">
                {currentEvents.map(event =>
                    <EventBlock 
                        event={event}
                        deleteEvent={deleteEvent} 
                        key={event.id} />
                )}
        </Col>
     );
}
 
export default EventsList;