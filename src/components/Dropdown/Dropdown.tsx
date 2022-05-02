import React, { useState } from "react";
import cn from 'classnames';
import './dropdown.css'
import { KeyboardArrowDown } from "@material-ui/icons";
import { UserType } from "../../constants";
import { IDropDown } from "../../types/role";

type DropDownProps = {
    id: string,
    label?: string,
    placeholder?: string,
    className?: string,
    errorMessage?: string,
    value?: string,
    isError?: boolean,
    onChange: (selectedRole?: IDropDown) => void,
    onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void,
    selectedRole?: IDropDown,
    options: Array<IDropDown>
}

const Dropdown = ({
    label,
    className,
    errorMessage,
    isError,
    id,
    onChange,
    onBlur,
    placeholder,
    options,
}: DropDownProps) => {

    const [isFocus, setFocus] = useState<boolean>(false);
    const [isBlur, setBlur] = useState<boolean>(true);
    const [isSelected, setSelected] = useState<boolean>(false);

    const handleFocus = () => {
        setFocus(true)
        setBlur(false)
    }

    const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
        setBlur(true)
        setFocus(false)
        onBlur(event)
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const role = UserType.find((user) => user.value === value)
        onChange(role);
        setSelected(true)
    }

    return (
        <div className={cn('dropdown', className, {
            'error-dropdown': errorMessage || isError
        })}>
            {label && (<span className="label-wrapper">
                <label htmlFor={id}>{label}</label>
            </span>)}
            <div className={cn('dropdown-field', {
                isFocus,
                isBlur
            })}>
                <select className={cn("select", {
                    isSelected
                })} id={id} name={id} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange}>
                    <option value="" className="dropdown-placeholder" disabled selected hidden>{placeholder}</option>
                    {options.map((option) => <option key={option.value} value={option.value} >{option.label}</option>)}
                </select>
                <span className="arrow-down">
                    <KeyboardArrowDown fontSize="small" />
                </span>
            </div>
            <span>{errorMessage}</span>
        </div>
    );
};

Dropdown.defaultProps = {
    type: 'text'
};

export default Dropdown;
