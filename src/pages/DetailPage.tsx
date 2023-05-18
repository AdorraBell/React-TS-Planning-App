import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Typography, Button, Modal, Col } from 'antd';
import AddEventForm from "src/components/AddEventForm";
import { useActions } from "src/hooks/useActions";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { IEvent } from "src/types/types";
import moment, { Moment } from "moment";


const { Title, Text } = Typography;

const DetailPage: FC = () => {

    const id = useParams().id || '';
    const [isModalVisible, setIsModalVisible] = useState(false);
    const changeModalVisible = () => setIsModalVisible(!isModalVisible);
    const {fetchGuests, createEvent, fetchEvents, deleteEvent} = useActions();
    const {guests, events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);
    const navigate = useNavigate();
    const [showAddEventBtn, setShowAddEventBtn] = useState(true);
    const [currentDataEvents, setCurrentDataEvents] = useState([] as IEvent[]);

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
        dateHasPassed(moment(id));
        setCurrentEvents();
    }, [])

    const saveEvent = (event: IEvent) => {
        createEvent(event);
        changeModalVisible();
        setCurrentDataEvents([...currentDataEvents, event]);
    }

    const goBack = () => {
        navigate('/calendar/');
    }

    const setCurrentEvents = () => {
        const currentEvents = events.filter(ev => {
            if(ev.date === id) return ev;
        })
        setCurrentDataEvents(currentEvents);
    }

    const dateHasPassed = (date: Moment) => {
        if(moment(date).isSameOrBefore(moment())){
            setShowAddEventBtn(false);
        } else {
            setShowAddEventBtn(true);
        }
    }

    const deletePoint = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e.currentTarget.dataset.id);
        const eventId = Number(e.currentTarget.dataset.id);
        deleteEvent(eventId, events);
        setCurrentDataEvents([...currentDataEvents.filter(ev => {
            if(ev.id !== eventId) return ev
        })])
    }

    return ( 
        <div className="h100">
            <Row justify="center">
                <Title level={2}>DETAIL {id}</Title>
            </Row>
            <Row>
                <Col className="w100">
                    {currentDataEvents.map(ev =>
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
                                </Col>
                                    <Button
                                        type="dashed" 
                                        danger
                                        ghost
                                        onClick={deletePoint}
                                        data-id={ev.id}>
                                            Delete
                                    </Button>
                            </Row>
                        </Col>
                    )}
                </Col>
            </Row>
            <Row 
                justify="space-around"
                className="detailButtonsWrapper">
                { showAddEventBtn &&
                    <Button 
                        type="primary" 
                        ghost
                        onClick={changeModalVisible}>
                        Add Event
                    </Button>
                }
                <Button 
                    type="primary" 
                    onClick={goBack}>
                    Go Back
                </Button>
            </Row>
            <Modal
                title="Add Event"
                open={isModalVisible}
                footer={null}
                onCancel={changeModalVisible}
                >
                <AddEventForm 
                    guests={guests}
                    eventDate={id}
                    formSubmit={saveEvent} />
            </Modal>
        </div>
     );
}
 
export default DetailPage;