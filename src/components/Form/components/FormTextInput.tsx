import React from 'react'
import { Form, InputGroup, Col } from "react-bootstrap";
import { getPattern } from '../../../regex/regex';

const FormTextInput: React.FC<InputObject> = ({
    name,
    label,
    handleChange,
    type,
    isDisabled,
    value,
    validation,
    errorMessage,
    updateFormError
}) => {
    const validate = (): void => {
        if (validation?.pattern && updateFormError && name && value) {
            const pattern = new RegExp(getPattern(validation.pattern))
            const error = !pattern.test(value);
            updateFormError({ [name]: error });
        } else {
            updateFormError && name && (updateFormError({ [name]: false }));
        }
    }

    return (
        <Form.Group >
            <Form.Label>{label}</Form.Label>
            <InputGroup hasValidation>
                <Form.Control
                    type={type}
                    defaultValue={value}
                    name={name}
                    className="mr-sm-2"
                    onChange={handleChange}
                    disabled={isDisabled}
                    required={validation?.required}
                    isInvalid={Boolean(errorMessage)}
                    onBlur={validate}
                />
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    )
}

export default FormTextInput
