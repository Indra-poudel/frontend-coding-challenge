import React, { useState } from "react";
import cn from 'classnames';
import './textfield.css'

type TextFieldProps = {
    inputId: string,
    label?: string,
    placeholder?: string,
    className?: string,
    errorMessage?: string,
    type?: string,
    value?: string,
    maxLength?: number,
    suffixText?: string,
    isError?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
}

const TextField = ({
    inputId,
    label,
    className,
    errorMessage,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    maxLength,
    isError,
}: TextFieldProps) => {

    const [isFocus, setFocus] = useState<boolean>(false)
    const [isBlur, setBlur] = useState<boolean>(true)

    const handleFocus = () => {
        setFocus(true)
        setBlur(false)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setBlur(true)
        setFocus(false)
        onBlur(event)
    }

    return (
        <div className={cn('text-field', className, {
            'error-text-field': errorMessage || isError
        })}>
            {label && (<span className="label-wrapper">
                <label htmlFor={inputId}>{label}</label>
            </span>)}
            <div className={cn('input-field', {
                isFocus,
                isBlur
            })}>
                <input maxLength={maxLength} value={value} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur} placeholder={placeholder} type={type} id={inputId} name={inputId}></input>
            </div>
            <span>{errorMessage}</span>
        </div>
    );
};

TextField.defaultProps = {
    type: 'text'
};

export default TextField;
