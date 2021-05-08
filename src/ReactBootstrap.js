import React from 'react';
import {Form,Button,Dropdown,ButtonGroup,Table,Carousel } from 'react-bootstrap';
// import DatePicker  from 'react-bootstrap-date-picker';

function ReactBootstrap(){
    const handleSubmit = (event) => {
        console.log("submited");
      };
    return(
        <div className=" ml-5 mt-5 mr-5">
        <h1>React-Bootstrap</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
            <h5>Form Controls</h5> 
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <h5>Sizing</h5>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Large text" />
                <br />
                <Form.Control type="text" placeholder="Normal text" />
                <br />
                <Form.Control size="sm" type="text" placeholder="Small text" />
            </Form.Group>
            <h5>Readonly</h5>
            <Form.Control type="text" placeholder="Readonly input here..." readOnly />
            <h5>Range Inputs</h5>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
            <Form.Group>
            <Dropdown as={ButtonGroup}>
                <Button variant="success">Split Button</Button>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
            <Form.Group>
                <h5>Carousels</h5>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-60"
                        src="flower.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-60"
                        src="flower2.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-60"
                        src="flower3.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Form.Group>
            <Form.Group>
                {/* <DatePicker/> */}
                <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>TEST 123</td>
                <td>test@test123.com</td>
                </tr>
                <tr>
                <td>2</td>
                <td>TEST 456</td>
                <td>test@test456.com</td>
                </tr>
                <tr>
                <td>3</td>
                <td>TEST 789</td>
                <td>test@test789.com</td>
                </tr>
            </tbody>
            </Table>
            </Form.Group>
            <Form.Group>
               
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>  
        </Form>
    </div>
    );

}
export default ReactBootstrap;