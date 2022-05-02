import React from 'react'
import cn from 'classnames';
import './button.css'

interface IButtonProps {
    title: string;
    onClick?: () => {};
    type: 'text' | 'contained';
    icon?: React.ReactNode;
    buttonRoleType?: "button" | "submit" | "reset"
}

const Button = ({ title, onClick, type, icon, buttonRoleType }: IButtonProps) => {
    return (
        <button type={buttonRoleType} onClick={onClick} className={cn('button', type)}>
            <span className="button-icon">
                {
                    icon
                }
            </span>
            <span className="button-label">{title}</span>
        </button>
    )
}

Button.defaultProps = {
    type: 'contained',
    onclick: () => {}
};

export default Button