import { Calendar } from "antd";
import { FC, useState } from "react";
import { IEvent } from "types/types";
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";


interface AppCalendarProps {
    events: IEvent[]
}

const AppCalendar: FC<AppCalendarProps> = () => {

    const [selectedDate, setSelectedDate] = useState(() => dayjs('2023-12-30'));
    const navigate = useNavigate();

    const onSelect = (date: Dayjs) => {
        setSelectedDate(date);
        navigate(`/detail-page/${selectedDate.format('YYYY-MM-DD')}`);
    }

    return ( 
        <Calendar 
            onSelect={onSelect}
            />
    );
}
 
export default AppCalendar;