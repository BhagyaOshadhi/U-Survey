import React from 'react'
import { Form } from "react-bootstrap";


const FromCheckBox: React.FC<InputObject> = ({ name, label, handleChange }) => {
    return (
        <>
            <div  className="mb-3">
                <Form.Check
                    onChange={handleChange}
                    name={name}
                    type={"checkbox"}
                    label={label}
                />
            </div>
        </>
    )
}
export default FromCheckBox
