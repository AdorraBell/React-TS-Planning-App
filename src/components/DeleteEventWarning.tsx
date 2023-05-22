import { Button, Col, Row } from "antd";
import { FC } from "react";


interface DeleteEventWarningProps {
    closeModal: () => void,
    deletePoint: () => void
}

const DeleteEventWarning: FC<DeleteEventWarningProps> = ({closeModal, deletePoint}) => {
    
    return ( 
        <Col>
            <Row>
                Are you sure you want to delete event?
            </Row>
            <Row
                justify="space-between"
                className="mr20">
                <Button 
                    type="primary" 
                    ghost
                    onClick={closeModal}>
                    Go Back
                </Button>
                <Button 
                    type="primary" 
                    danger
                    onClick={deletePoint}>
                    Delete Event
                </Button>
            </Row>
        </Col>
     );
}
 
export default DeleteEventWarning;