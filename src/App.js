import React, {Fragment, useState } from 'react';
import DatePickerR from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import addDays from 'date-fns/addDays'
import { DatePicker } from "@material-ui/pickers";
import { DateTimePicker, KeyboardDateTimePicker } from "@material-ui/pickers";

function App(props) {
  const [dt, setDt] = useState(moment());
    const [selectedDate, handleDateChange] = useState(new Date("2018-01-01T00:00:00.000Z"));
  return(
      <Fragment>
      <div className="App"  style={{marginLeft:"40%"}} >
        <h2>Date Time Picker</h2>
          {/*<DateTimePicker*/}
          {/*    variant="inline"*/}
          {/*    label="Basic example"*/}
          {/*    value={selectedDate}*/}
          {/*    onChange={handleDateChange}*/}
          {/*/>*/}
         <DatePickerR
            inputProps={{
              style: { width: 250 }
            }}
            value={dt}
            dateFormat="DD-MM-YYYY"
            timeFormat="hh:mm A"
            onChange={val => setDt(val)}
            showTimeSelect
            // timeFormat="HH:mm"
            // timeIntervals={20}
            // timeCaption="time"
            // dateFormat="MMMM d, yyyy h:mm aa"
            // minDate={new Date()}
            // maxDate={addDays(new Date(), 7)}
        />
        <br />
        <div><b>Date:</b> {dt.format('LLL')}</div>
           </div>
        </Fragment>
  );
};

export default App;