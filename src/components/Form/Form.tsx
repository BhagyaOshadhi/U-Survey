import React, { useState, useEffect } from 'react'
import FormTextInput from './components/FormTextInput'
import fieldList from './fieldList.json'
import { Card, Button } from "react-bootstrap";
import { getPattern } from '../../regex/regex';

const Form: React.FC = () => {
    const [formState, setFormState] = useState<any>({});
    const [fieldValidation, setFieldValidation] = useState<any>({});
    const [formError, setFormError] = useState<any>({});

    useEffect(() => {
        const initialState: any = {};
        const validation: any = {};
        fieldList.forEach(field => {
            initialState[field.name] = field.value;
            validation[field.name] = field.validation
        })
        setFieldValidation(validation);
        setFormState(initialState);
    }, [fieldList]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        validate(formState);
        console.log(formState)
        alert(JSON.stringify(formState));
    }

    const validate = (userInput: any): boolean => {
        const keyList: any = Object.keys(userInput)
        let errorObject: any = {};
        keyList.forEach((key: any) => {
            if (fieldValidation?.[key]?.pattern) {
                const pattern = new RegExp(getPattern(fieldValidation[key].pattern))
                const hasError = pattern.test(userInput[key]);
                if (hasError)
                    errorObject[key] = fieldList.find((field: any) => field.name === key)?.errorMessage
            }
        });
        setFormError(errorObject)
        return true;
    }

    return (
        <Card className="text-center" style={{ maxWidth: '30%' }}>
            <Card.Header>Test form 1</Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    {fieldList.map(field => {
                        return <FormTextInput
                            name={field.name}
                            label={field.label}
                            type={field.type}
                            handleChange={handleChange}
                            isDisabled={field.isDisabled}
                            value={field.value}
                            validation={field.validation}
                            errorMessage={field.errorMessage}
                        />
                    })}
                    <Button variant="primary" type='submit' >submit</Button>
                </form>
            </Card.Body>
            <Card.Footer className="text-muted">Form footer</Card.Footer>
        </Card>
    )
}

export default Form
