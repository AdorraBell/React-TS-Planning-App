import { Calendar } from "antd";
import { FC } from "react";
import { IEvent } from "types/types";
import type { Dayjs } from 'dayjs';
import { useNavigate } from "react-router-dom";


interface AppCalendarProps {
    events: IEvent[]
}

const AppCalendar: FC<AppCalendarProps> = (props) => {

    const navigate = useNavigate();

    const onSelect = (date: Dayjs) => {
        navigate(`/detail-page/${date.format('YYYY-MM-DD')}`);
    }

    const dateCellRender = (value: Dayjs) => {
        const formatedData = value.format('YYYY-MM-DD');
        const currentDayEvents = props.events.filter((ev: IEvent) =>
            ev.date === formatedData 
        );
        const randomNum = (Math.random()*(5-1) + 1).toFixed();
        const lineClass = `lineVariant${randomNum}`;

        return (
          <div>
            {currentDayEvents.map((ev: IEvent, index: number) =>
                <div 
                    key={index}
                    className={lineClass}>
                    {ev.eventName}
                </div>
            )}
          </div>
        );
      };

    return ( 
        <Calendar 
            onSelect={onSelect}
            cellRender={dateCellRender}
            />
    );
}
 
export default AppCalendar;