import React, { useState } from 'react';
import {Calendar as ReactCalendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <ReactCalendar
        // onClickDay={}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Calendar