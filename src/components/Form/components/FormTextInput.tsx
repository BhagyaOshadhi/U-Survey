import React from 'react'
import { FormControl, Form } from "react-bootstrap";

const FormTextInput: React.FC<InputObject> = ({ name, label, handleChange, type, isDisabled, value, validation, errorMessage }) => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} defaultValue={value} name={name} className="mr-sm-2" onChange={handleChange} disabled={isDisabled} required={validation?.required} />
        </Form.Group>
    )
}

export default FormTextInput
