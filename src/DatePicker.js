import React, {Fragment, useState } from 'react';
import DatePickerR from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


function DateTimePicker(props) {
    const [dt, setDt] = useState(moment());
    return(
        <Fragment>
            <div >
                <h2>Date Time Picker</h2>
                <DatePickerR
                    inputProps={{
                        style: { width: 250 }
                    }}
                    value={dt}
                    dateFormat="DD-MM-YYYY"
                    timeFormat="hh:mm A"
                    onChange={val => setDt(val)}
                    showTimeSelect
                />
                <br />
                <br />
                <br />
                <div><b>Date:</b> {dt.format('LLL')}</div>
            </div>
        </Fragment>
    );
};

export default DateTimePicker;