import React from 'react';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {Card,} from 'reactstrap';

function Chart(props){
        const state = {
            dataLine: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "dec"],
                datasets: [
                    {
                        label: "appliedLeaves",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: `${props =>props.theme.subMain}` ,
                        borderColor: "props.theme.main",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        // pointBorderColor: "rgb(205, 130,1 58)",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth:7,
                        pointHoverRadius: 2,
                        pointHoverBackgroundColor: "props.theme.main",
                        pointHoverBorderColor: "props.theme.main",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 5,
                        data: [4,5,8,6,4,2,5,4]
                    }
                ]
            }
    }
    return (
        <Card body className=" canvas serv-card mr-2 mb-2 px-1 b-1 shadow-sm" md={6}>
        <MDBContainer sm={4} lg={3} md={3}>
            <b><h6 className="leaveStatusHeader">Leave Chart</h6></b>
            <Line data={state.dataLine}/>
        </MDBContainer>
        </Card>
    )
}
export default Chart;