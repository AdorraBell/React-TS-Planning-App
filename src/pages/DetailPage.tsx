import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Typography, Button, Modal } from 'antd';
import AddEventForm from "../components/AddEventForm";

const { Title } = Typography;

const DetailPage: FC = () => {

    const id = useParams().id;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisible = () => setIsModalVisible(!isModalVisible);
    

    return ( 
        <div className="h100">
            <Row justify="center">
                <Title level={2}>DETAIL {id}</Title>
            </Row>
            <Row></Row>
            <Row justify="center">
                <Button 
                    type="primary" 
                    ghost
                    onClick={changeModalVisible}>
                    Add Event
                </Button>
            </Row>
            <Modal
                title="Add Event"
                open={isModalVisible}
                footer={null}
                onCancel={changeModalVisible}
            >
                <AddEventForm />
            </Modal>
        </div>
     );
}
 
export default DetailPage;