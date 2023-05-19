import { FC } from "react";
import { useParams } from "react-router-dom";
import { Row, Typography } from 'antd';
import DateEvents from "src/components/DateEvents";


const { Title } = Typography;

const DetailPage: FC = () => {

    const id = useParams().id || '';

    return ( 
        <div className="h100">
            <Row justify="center">
                <Title level={2}>DETAIL {id}</Title>
            </Row>
            <DateEvents 
                date={id}/>
        </div>
     );
}
 
export default DetailPage;