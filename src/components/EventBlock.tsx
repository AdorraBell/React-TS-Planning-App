import { FC } from "react";
import { Row, Typography, Button, Col } from 'antd';
import { IEvent } from "src/types/types";

const { Text } = Typography;

interface EventBlockProps {
    event: IEvent
    deleteEvent: (e: React.MouseEvent<HTMLElement>) => void
}

const EventBlock: FC<EventBlockProps> = ({event, deleteEvent}) => {

    return ( 
        <Col 
            key={event.id}
            style={{background: event.eventTheme}}
            className="detailEventBlock">
            <Row 
                justify="space-between"
                className="alItCenter">
                <Col>
                    <Row>
                        <Text strong>Event Title:</Text>
                        <Text>{event.eventName}</Text>
                    </Row>
                    <Row>
                        <Text strong>Event Description:</Text>
                        <Text>{event.eventDescription}</Text>
                    </Row>
                    <Row>
                        <Text strong>Event Guest:</Text>
                        <Text>{event.guest || `-`}</Text>
                    </Row>
                    <Row>
                        <Text strong>Event Author:</Text>
                        <Text>{event.author}</Text>
                    </Row>
                </Col>
                    <Button
                        type="dashed" 
                        danger
                        ghost
                        onClick={deleteEvent}
                        data-id={event.id}>
                            Delete
                    </Button>
            </Row>
        </Col>
    );
}
 
export default EventBlock;