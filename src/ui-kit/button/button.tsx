'use client'

// @flow
import * as React from 'react';
import clsx from 'clsx';
import s from './button.module.scss'

type ButtonType = 'button' | 'reset' | 'submit';
type ButtonStyle = 'primary' | 'secondary';

type ButtonProps = {
    className?: string;
    label?: string;
    type?: ButtonType;
    onClick?: () => void;
    style?: ButtonStyle;
};
export const Button = ({
                           className,
                           type = 'button',
                           onClick,
                           label,
                           style = 'primary'
}: ButtonProps) => {
    return (
        <button className={clsx(style === 'primary'
                                ? s['button--primary']
                                : s['button--secondary'],
                style === 'primary'
                    ? 'button-text'
                    : 'button-text--bold',
                className)}
                type={type}
                onClick={onClick}
        >
            {label}
        </button>
    );
};