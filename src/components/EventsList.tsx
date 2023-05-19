import { FC } from "react";
import { Row, Typography, Button, Col } from 'antd';
import { IEvent } from "src/types/types";

const { Text } = Typography;

interface EventsLisrProps {
    currentEvents: IEvent[],
    deleteEvent: (e: React.MouseEvent<HTMLElement>) => void
}

const EventsList: FC<EventsLisrProps> = ({currentEvents, deleteEvent}) => {
    return ( 
        <Col className="w100">
                {currentEvents.map(ev =>
                    <Col 
                        key={ev.id}
                        style={{background: ev.eventTheme}}
                        className="detailEventBlock">
                        <Row 
                            justify="space-between"
                            className="alItCenter">
                            <Col>
                                <Row>
                                    <Text strong>Event Title:</Text>
                                    <Text>{ev.eventName}</Text>
                                </Row>
                                <Row>
                                    <Text strong>Event Description:</Text>
                                    <Text>{ev.eventDescription}</Text>
                                </Row>
                                <Row>
                                    <Text strong>Event Guest:</Text>
                                    <Text>{ev.guest || `-`}</Text>
                                </Row>
                                <Row>
                                    <Text strong>Event Author:</Text>
                                    <Text>{ev.author}</Text>
                                </Row>
                            </Col>
                                <Button
                                    type="dashed" 
                                    danger
                                    ghost
                                    onClick={deleteEvent}
                                    data-id={ev.id}>
                                        Delete
                                </Button>
                        </Row>
                    </Col>
                )}
        </Col>
     );
}
 
export default EventsList;