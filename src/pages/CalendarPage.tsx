import { FC, useEffect } from "react";
import AppCalendar from "../components/AppCalendar";
import { Row, Col } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const Event: FC = () => {

    const {user} = useTypedSelector(state => state.auth);
    const {fetchGuests, fetchEvents} = useActions();

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, [])

    const {events} = useTypedSelector(state => state.event);

    return (
        <>
            <Row>
                <Col className="calendar-row">
                    <AppCalendar 
                        events={events} />
                </Col>
            </Row>
        </> 
    );
}
 
export default Event;