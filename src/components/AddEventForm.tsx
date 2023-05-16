import { FC } from "react";
import { Button, Form, Input, Select} from 'antd';
import { rules } from "../utils/rules";


const AddEventForm: FC = () => {

    const onSubmit = (data: FormData) => {
       
    }

    return ( 
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            autoComplete="off" >
                <Form.Item
                    label="Event Name"
                    name="eventname"
                    rules={[rules.required('Please input name of event!')]}
                    >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Event Description"
                    name="eventdescription"
                    rules={[rules.required('Please input event description!')]}
                    >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Add Guest"
                    name="addguest">
                    <Select>
                        <Select.Option value="first">
                            first
                        </Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
        </Form>
    );
}
 
export default AddEventForm;