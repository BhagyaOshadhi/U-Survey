import React, { useState, useRef } from 'react';

interface Data {
    f1: string;
    f2: string;
}

interface Props {
    text?: string;
    disabled?: boolean;
    charLimit?: number;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    data?: Data;
}


const TextField: React.FC<Props> = ({ text, handleChange }) => {
    const [value, setValue] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <label>{text}</label>
            <input type='text' name={text} ref={inputRef} onChange={handleChange} />
        </div>
    )
}

export default TextField
