import React from 'react';
import {Table } from 'react-bootstrap';

function Comparison (){
    return(
        <div >
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th><h2>React-Bootstrap</h2></th>
                    <th><h2>Material-ui</h2> 
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><b>browser compatibility</b>
                    <br/>
                    Both Bootstrap and Material-ui gave their design tools the ability to<br/>
                     adapt to each browser and remain functional.</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td><b>Responsive Grid System</b>
                    <br/>
                    Both use 12 column grid system with similar structure to ensure <br/>
                    that developers give users an integrally responsive UI
                     </td>
                    <td></td>
                    </tr>
                    <tr>
                    <td><b>Customization</b>
                    <br/>
                    Bootstrap websites with similar themes look more alike and easily recognizable <br/> 
                    since none of them is unique.
                    <br/> 
                    So the user is familiar with the interface and user experience remains the same on all of them.
                     </td>
                    <td>Material Design offers more options for customizations and <br/>
                     Material-based applications are unique, and have a distinctly modern interfaces.</td>
                    </tr>
                    <tr>
                    <td><b>Community Support</b>
                    <br/>
                    Bootstrap has a large and active online developers’<br/> community
                     and an incredible amount of resources on its website to <br/>
                     provide the developers using Bootstrap with the necessary support.
                     This ensures that web development is made as easy as possible and 
                     <br/>any problems encountered by developers are promptly fixed.
                     </td>
                    <td></td>
                    </tr>
                    <tr>
                    <td><b>Dependencies</b>
                    <br/>
                    Bootstrap has proven to be a somewhat complex framework. <br/>
                     This gives rise to problems like a slow and bulky app with lots of useless features that lower performance and drain battery.</td>
                    <td>Material UI is only React based. Material design in pure CSS without any third-party libraries</td>
                    </tr>
                    <tr>
                    <td><b>Development Speed</b>
                    <br/>
                    High speed of development thanks to its' reusable code</td>
                    <td>The development speed is less than bootstrap offers, but can be increased by using templates.</td>
                    </tr>
                    <tr>
                    <td><b>Components</b>
                    <br/>
                    Don't have Date Picker and Time picker Components and we have to use third party library inorder to use them. </td>
                    <td>Don't have Form component and Carousel component . we have to install third party library to use them.</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Comparison;