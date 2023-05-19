import { FC, useEffect } from "react";
import AppCalendar from "src/components/AppCalendar";
import { Row, Col } from "antd";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { useActions } from "src/hooks/useActions";

const Event: FC = () => {

    const {user} = useTypedSelector(state => state.auth);
    const {fetchGuests, fetchEvents} = useActions();

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, [])

    const {events} = useTypedSelector(state => state.event);

    return (
        <Row>
            <Col className="calendarRow">
                <AppCalendar 
                    events={events} />
            </Col>
        </Row>
    );
}
 
export default Event;