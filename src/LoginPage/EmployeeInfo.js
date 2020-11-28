import React,{Component} from 'react'
import './Login.css'
import {Dropdown, DropdownMenu, DropdownItem,DropdownToggle,Row,Col,Button } from 'reactstrap';
class EmployeeInfo extends Component{
    render(){
        return(
            <div >
                <div className="background">
                    <div className="header">
                        <h1>Employee Leave Informations</h1>
                    </div>    
                    <div className="userinfo">
                        <Row>
                            <Col>
                                <div>
                                    <Col className="d-flex ">
                                        <div className="leaveinfo" >
                                            <p >Leave Options</p>
                                            <h6> Classical Leave :</h6>
                                            <h6> Annual Leave :</h6>
                                            <h6> Sick Leave :</h6>
                                        </div>
                                        <div className="usericon" >
                                            <img src="../images/images.png" alt="usericon"></img>
                                            <h6 >employee name</h6>
                                        </div>
                                    </Col>
                                    <Dropdown>
                                    <DropdownToggle variant="success" id="dropdown-basic" caret color={  'danger'}>
                                         Leave Type
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Classical</DropdownItem>
                                        <DropdownItem>Annual</DropdownItem>
                                        <DropdownItem>Sick</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                </div>
                            </Col>
                    </Row>
                    </div>                               
                </div>
             </div>
        );
    }
}
export default EmployeeInfo;