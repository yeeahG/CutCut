import React, { useContext, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const selectedDate = (date) => {
        props.dates(date);
    }


    return (
        <div>
            <h4>원하는 날짜</h4>
            <DatePicker 
                minDate={new Date()}
                popperPlacement="auto"
                selected={startDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="yyyy, MMMM d h:mm"
                value={setStartDate}
                onChange={(date) => {
                    setStartDate(date);
                }}
                onSelect ={(date)=>{selectedDate(date);}}
            />
            {startDate.toLocaleString()}
        </div>
    )
}

export default Calender