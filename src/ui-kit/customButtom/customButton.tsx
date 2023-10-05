import s from './customButtom.module.scss'
import * as React from 'react';

type CustomButtonProps = {
    onCLick?: () => void;
    label: string;
};
export const CustomButton = ({onCLick, label}: CustomButtonProps) => {
    return (
        <button className={s['button']}>
            {label}
        </button>
    );
};