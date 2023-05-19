import { ChangeEvent, FC, useState  } from "react";
import { Button, Form, Input, Radio, RadioChangeEvent, Select } from 'antd';
import { rules } from "src/utils/rules";
import { IUser, IEvent } from "src/types/types";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import { eventColors } from "src/constants/eventColors";


interface AppEventFormProps {
    guests: IUser[],
    eventDate: string,
    formSubmit: (event: IEvent) => void
}

const AddEventForm: FC<AppEventFormProps> = ({guests, eventDate, formSubmit}) => {

    const username = useTypedSelector(state => state.auth.username);

    const [event, setEvent] = useState<IEvent>({
        author: username,
        date: eventDate,
        eventName: '',
        eventDescription: '',
        guest: null,
        id: 1,
        eventTheme: "transparent"
    });

    const selectGuest = (guest: string) => {
        setEvent({...event, guest})
    }

    const titleChanged = (title: ChangeEvent<HTMLInputElement>) => {
        setEvent({...event, eventName: title.target.value})
    }

    const descriptionChanged = (description: ChangeEvent<HTMLInputElement>) => {
        setEvent({...event, eventDescription: description.target.value})
    }

    const onSubmit = () => {
       formSubmit({...event, id: Date.now()});
    }

    const setEventTheme = (e: RadioChangeEvent) => {
        setEvent({...event, eventTheme: e.target.value})
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
                    <Input 
                        value={event.eventName} 
                        onChange={titleChanged} />
                </Form.Item>

                <Form.Item
                    label="Event Description"
                    name="eventdescription"
                    rules={[rules.required('Please input event description!')]}
                    >
                    <Input 
                        value={event.eventDescription}
                        onChange={descriptionChanged} />
                </Form.Item>

                <Form.Item
                    label="Add Guest"
                    name="addguest">
                    <Select
                        onChange={selectGuest}>
                        {guests.map(guest => 
                            <Select.Option 
                                value={guest.username}
                                key={guest.username}>
                                    {guest.username}
                            </Select.Option>
                        )}
                        
                    </Select>
                </Form.Item>
                            
                <Form.Item
                    label="Event Theme"
                    name="eventtheme">
                    <Radio.Group 
                        onChange={setEventTheme}>
                        {eventColors.map(color =>
                            <Radio 
                                value={color.value}
                                style={{background: color.value}}
                                key={color.value}>
                                    {color.name}
                            </Radio>
                        )}
                    </Radio.Group>
                    
                </Form.Item>
                
                <Form.Item 
                    wrapperCol={{ offset: 8, span: 16 }}>
                    <Button 
                        type="primary" 
                        htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
        </Form>
    );
}
 
export default AddEventForm;