import { FC } from "react";
import AppCalendar from "../components/AppCalendar";
import { Row, Col } from "antd";

const Event: FC = () => {
    return (
        <>
            <Row>
                <Col className="calendar-row">
                    <AppCalendar />
                </Col>
            </Row>
        </> 
    );
}
 
export default Event;