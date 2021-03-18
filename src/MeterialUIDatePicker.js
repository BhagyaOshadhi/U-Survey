// import React, { Fragment, useState } from "react";
// import { DatePicker } from "@material-ui/pickers";
//
//
//
// function BasicDatePicker(props) {
//     const [selectedDate, handleDateChange] = useState(new Date());
//
//     return (
//         <Fragment>
//             <DatePicker
//                 label="Basic example"
//                 value={selectedDate}
//                 onChange={handleDateChange}
//                 animateYearScrolling
//             />
//
//             <DatePicker
//                 autoOk
//                 label="Clearable"
//                 clearable
//                 disableFuture
//                 value={selectedDate}
//                 onChange={handleDateChange}
//             />
//
//             <DatePicker
//                 disableFuture
//                 openTo="year"
//                 format="dd/MM/yyyy"
//                 label="Date of birth"
//                 views={["year", "month", "date"]}
//                 value={selectedDate}
//                 onChange={handleDateChange}
//             />
//         </Fragment>
//     );
// }
//
// export default BasicDatePicker;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React from 'react';
// // import Grid from '@material-ui/core/Grid';
// // import DateFnsUtils from '@date-io/date-fns';
// // import {
// //     MuiPickersUtilsProvider,
// //     KeyboardTimePicker,
// //     KeyboardDatePicker,
// // } from '@material-ui/pickers';
// // function  MeterialUIDatePicker(){
// //     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
// //
// //     const handleDateChange = (date) => {
// //         setSelectedDate(date);
// //     };
// //     return(
// //       <div> hi</div>
//         // <KeyboardDatePicker
//         //     disableToolbar
//         //     variant="inline"
//         //     format="MM/dd/yyyy"
//         //     margin="normal"
//         //     id="date-picker-inline"
//         //     label="Date picker inline"
//         //     value={selectedDate}
//         //     onChange={handleDateChange}
//         //     KeyboardButtonProps={{
//         //         'aria-label': 'change date',
//         //     }}
//         // />
// //
// //     );
// // }
// // export default MeterialUIDatePicker;