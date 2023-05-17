import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Typography, Button, Modal } from 'antd';
import AddEventForm from "../components/AddEventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "types/types";
import moment,  { Moment } from "moment";


const { Title } = Typography;

const DetailPage: FC = () => {

    const id = useParams().id || '';
    const [isModalVisible, setIsModalVisible] = useState(false);
    const changeModalVisible = () => setIsModalVisible(!isModalVisible);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests, events} = useTypedSelector(state => state.event);
    const {user} = useTypedSelector(state => state.auth);
    const navigate = useNavigate();
    const [showAddEventBtn, setShowAddEventBtn] = useState(true);

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
        dateHasPassed(moment(id));
    }, [])

    const saveEvent = (event: IEvent) => {
        createEvent(event);
        changeModalVisible();
    }

    const goBack = () => {
        navigate('/calendar')
    }

    const dateHasPassed = (date: Moment) => {
        console.log(moment().format('YYYY-MM-DD'));
        if(moment(date).isSameOrBefore(moment())){
            setShowAddEventBtn(false);
        } else {
            setShowAddEventBtn(true);
        }
    }

    return ( 
        <div className="h100">
            <Row justify="center">
                <Title level={2}>DETAIL {id}</Title>
            </Row>
            <Row>
                
            </Row>
            <Row justify="center">
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