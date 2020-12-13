
import React,{Component} from 'react'
import './EmpLogin.css'
import {Button,Modal } from 'reactstrap';
class EmployeeInfoModal extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    render(){
         return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Employee Informations
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Employee info
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button varient="info" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
         );
    }
}
 export default EmployeeInfoModal ;







// import React,{Component} from 'react'
// import './EmpLogin.css'
// import {Dropdown, DropdownMenu, DropdownItem,DropdownToggle,Row,Col,Button,UncontrolledDropdown,Modal } from 'reactstrap';
// class EmployeeInfo extends Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             dropdownOpen: false,
//             submitTo:"Submit To",
//             leaveType:"Leave Type",
//             leaveStart:"Leave Start",
//             leaveEnd:"Leave Ene"
//         }
//         this.toggle=this.toggle.bind(this)
//     }
//     toggle() {
//         this.setState(prevState => ({
//             dropdownOpen: !prevState.dropdownOpen,
//         }));
//     }
//     // changeValue(e) {
//     //     this.setState({submitTo: e.currentTarget.textContent})
//     // }
//     render(){
//         return(
//             <div >
//                 <div className="background">
//                     <div className="header">
//                         <h1>Employee Leave Informations</h1>
//                     </div>    
//                     <div className="userinfo">
//                         <Row>
//                             <Col>
//                                 <div>
//                                     <Col className="d-flex ">
//                                         <div className="leaveinfo" style={{width:"10000px"}} >
//                                             <table>
//                                                 <th  style={{width:"10000px"}}>Total Leaves</th>
//                                                 {/* <th  style={{marginLeft:"40vw !important"}}>Leave Status</th> */}
//                                                 <tr>
//                                                     <td><h3> Classical Leave : </h3></td>
//                                                     <td><button> 20</button></td>
//                                                     <td></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td><h3> Annual Leave : </h3></td>
//                                                     <td><button> 20</button></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td><h3> Sick Leave : </h3></td>
//                                                     <td><button> 20</button></td>
//                                                 </tr>
//                                                 <tr>
//                                                     <br/>
//                                                     <br/>
//                                                 </tr>
                                                
//                                             </table>                                           
//                                         </div>
//                                         <div className="status">
//                                             <table>
//                                                 <th> Status</th>
//                                             </table>
//                                         </div>
//                                         <div className="usericon" >
//                                             {/*<img src="./images/images.png" alt="usericon"></img>*/}
//                                             {/*<img src={require('./images/images.png')} alt="usericon" />*/}
//                                             <h6 >employee name</h6>
//                                         </div>
//                                     </Col>
//                                    <div>
//                                          <table>
//                                              <tr>
//                                                  <td><h6 style={{color:"black"}}>Leave start:</h6></td>
//                                                  <td>
//                                                      <UncontrolledDropdown>
//                                                          <DropdownToggle variant="success" id="dropdown-basic" caret color={  'info'}>
//                                                              {this.state.leaveStart}
//                                                          </DropdownToggle>
//                                                          <DropdownMenu>
//                                                              <DropdownItem  onClick={() => {this.setState({ leaveStart:"date1" })}}>date1</DropdownItem>
//                                                              <DropdownItem onClick={() => {this.setState({ leaveStart:"date2" })}}>date2</DropdownItem>
//                                                              <DropdownItem onClick={() => {this.setState({ leaveStart:"date3" })}}>date3</DropdownItem>
//                                                          </DropdownMenu>
//                                                      </UncontrolledDropdown>
//                                                  </td>
//                                              </tr>
//                                                 <tr>
//                                                  <td><h6 style={{color:"black"}}>Leave End:</h6></td>
//                                                      <td>
//                                                      <UncontrolledDropdown>
//                                                          <DropdownToggle variant="success" id="dropdown-basic" caret color={ 'info'}>
//                                                              {this.state.leaveEnd}
//                                                          </DropdownToggle>
//                                                          <DropdownMenu>
//                                                              <DropdownItem  onClick={() => {this.setState({ leaveEnd:"date1" })}}>date1</DropdownItem>
//                                                              <DropdownItem onClick={() => {this.setState({ leaveEnd:"date2" })}}>date2</DropdownItem>
//                                                              <DropdownItem onClick={() => {this.setState({ leaveEnd:"date3" })}}>date3</DropdownItem>
//                                                          </DropdownMenu>
//                                                      </UncontrolledDropdown>
//                                                      </td>
//                                                  </tr>
//                                                  <tr>
//                                                     <td><h6 style={{color:"black"}}>Leave type:</h6></td>
//                                                     <td>
//                                                     <UncontrolledDropdown>
//                                                         <DropdownToggle variant="success" id="dropdown-basic" caret color={  'info'}>
//                                                             {this.state.leaveType}
//                                                         </DropdownToggle>
//                                                         <DropdownMenu>
//                                                             <DropdownItem  onClick={() => {this.setState({ leaveType:"Classical" })}}>Classical</DropdownItem>
//                                                             <DropdownItem  onClick={() => {this.setState({ leaveType:"Annual" })}}>Annual</DropdownItem>
//                                                             <DropdownItem  onClick={() => {this.setState({ leaveType:"Sick" })}}>Sick</DropdownItem>
//                                                         </DropdownMenu>
//                                                     </UncontrolledDropdown>
//                                                     </td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td><h6 style={{color:"black"}}>Submit To</h6></td>
//                                                     <td>
//                                                     <UncontrolledDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                                                         <DropdownToggle variant="success" id="dropdown-basic" caret color={  'info'}>
//                                                             {this.state.submitTo}
//                                                         </DropdownToggle>
//                                                         <DropdownMenu>
//                                                             <DropdownItem name="shehan" value="shehan" onClick={() => {this.setState({ submitTo:"Shehan" })}}>Shehan</DropdownItem>
//                                                             <DropdownItem name="Malith" value="Malith" onClick={()=>{this.setState({submitTo:"Malith"})}}>Malith</DropdownItem>
//                                                             <DropdownItem name="Ridmi" value="Ridmi" onClick={() =>{this.setState({submitTo:"Ridmi"})}}>Ridmi</DropdownItem>
//                                                         </DropdownMenu>
//                                                     </UncontrolledDropdown>
//                                                     </td>
//                                                 </tr>
//                                        </table>
//                                    </div>
//                                 </div>
//                             </Col>
//                     </Row>
                   
//                     </div>                               
//                 </div>
//              </div>
//         );
//     }
// }
// export default EmployeeInfo;