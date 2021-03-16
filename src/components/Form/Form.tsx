import React, { useState, useEffect } from 'react'
import FormTextInput from './components/FormTextInput'
import { Card, Button } from "react-bootstrap";
import FromCheckBox from './components/FromCheckBox';

interface Props {
    fieldList: Array<InputObject>
}

const Form: React.FC<Props> = ({ fieldList }) => {
    const [formState, setFormState] = useState<any>({ fieldList });
    const [fieldValidation, setFieldValidation] = useState<any>({});
    const [formError, setFormError] = useState<any>({});

    useEffect(() => {
        const initialState: any = {};
        const validation: any = {};
        fieldList.forEach((field: any) => {
            initialState[field.name] = field.value;
            validation[field.name] = field.validation
        })
        setFieldValidation(validation);
        setFormState(initialState);
    }, [fieldList]);

    const updateFormError = (error: any) => {
        setFormError({ ...formError, ...error })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.type === 'checkbox')
            setFormState({ ...formState, [event.target.name]: event.target.checked });
        else
            setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        !validate() && alert("Success");
    }

    const validate = (): boolean => {
        const keyList: any = Object.keys(formError)
        let hasError = false;
        keyList.forEach((key: any) => {
            if (formError[key]) {
                hasError = true;
            }
        });
        return hasError;
    }

    return (
        <Card className="text-center" style={{ maxWidth: '30%' }}>
            <Card.Header>Test form 1</Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    {fieldList.map((field: any) => {
                        if (field.type === "checkbox")
                            return <FromCheckBox
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                handleChange={handleChange}
                                isDisabled={field.isDisabled}
                                value={field.value}
                                validation={field.validation}
                                errorMessage={formError[field.name] && field.errorMessage}
                            />
                        else
                            return <FormTextInput
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                handleChange={handleChange}
                                isDisabled={field.isDisabled}
                                value={formState[field.name]}
                                validation={field.validation}
                                errorMessage={formError[field.name] && field.errorMessage}
                                updateFormError={updateFormError}
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
