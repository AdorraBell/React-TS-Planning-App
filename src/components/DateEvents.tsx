import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button, Modal } from 'antd';
import AddEventForm from "src/components/AddEventForm";
import { useActions } from "src/hooks/useActions";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { IEvent } from "src/types/types";
import moment, { Moment } from "moment";
import DeleteEventWarning from "src/components/DeleteEventWarning";
import EventsList from "src/components/EventsList";


interface DateEventsProps {
    date: string
}

const DateEvents: FC<DateEventsProps> = ({date}) => {

    const [isAddEventModalVisible, setIsAddEventModalVisible] = useState(false);
    const changeAddEventModalVisible = () => setIsAddEventModalVisible(!isAddEventModalVisible);
    const {fetchGuests, createEvent, fetchEvents, deleteEvent} = useActions();
    const {guests, events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);
    const navigate = useNavigate();
    const [showAddEventBtn, setShowAddEventBtn] = useState(true);
    const [currentDataEvents, setCurrentDataEvents] = useState([] as IEvent[]);
    const [isRemoveEventModalVisible, setIsRemoveEventModalVisible] = useState(false);
    const changeRemoveEventModalVisible = () => setIsRemoveEventModalVisible(!isRemoveEventModalVisible);
    const [deletedEventId, setDeletedEventId] = useState(1);

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
        dateHasPassed(moment(date));
        setCurrentEvents();
    }, [])

    const saveEvent = (event: IEvent) => {
        createEvent(event);
        changeAddEventModalVisible();
        setCurrentDataEvents([...currentDataEvents, event]);
    }

    const goBack = () => {
        navigate('/calendar/');
    }

    const setCurrentEvents = () => {
        const currentEvents = events.filter(ev => 
            ev.date === date
        )
        setCurrentDataEvents(currentEvents);
    }

    const dateHasPassed = (date: Moment) => {
        if(moment(date).isSameOrBefore(moment())){
            setShowAddEventBtn(false);
        } else {
            setShowAddEventBtn(true);
        }
    }

    const deletePoint = () => {
        const eventId = deletedEventId;
        deleteEvent(eventId, events);
        setCurrentDataEvents([...currentDataEvents.filter(ev => 
            ev.id !== eventId
        )]);
        changeRemoveEventModalVisible();
    }

    const deleteButtonClicked = (e: React.MouseEvent<HTMLElement>) => {
        changeRemoveEventModalVisible();
        const eventId = Number(e.currentTarget.dataset.id);
        setDeletedEventId(eventId);
    }

    return ( 
        <>
            <Row>
                <EventsList 
                    currentEvents={currentDataEvents}
                    deleteEvent={deleteButtonClicked}/>
            </Row>
            <Row 
                justify="space-around"
                className="detailButtonsWrapper">
                { showAddEventBtn &&
                    <Button 
                        type="primary" 
                        ghost
                        onClick={changeAddEventModalVisible}>
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
                open={isAddEventModalVisible}
                footer={null}
                onCancel={changeAddEventModalVisible}
                >
                <AddEventForm 
                    guests={guests}
                    eventDate={date}
                    formSubmit={saveEvent} />
            </Modal>
            <Modal 
                title="Remove Event"
                open={isRemoveEventModalVisible}
                footer={null}
                onCancel={changeRemoveEventModalVisible}>
                <DeleteEventWarning 
                    closeModal={changeRemoveEventModalVisible}
                    deletePoint={deletePoint}/>
            </Modal> 
        </>
    );
}
 
export default DateEvents;