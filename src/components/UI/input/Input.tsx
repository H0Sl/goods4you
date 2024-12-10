import React, { ChangeEvent } from 'react';
import cl from './Input.module.css';
interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const Input: React.FC<InputProps> = ({ onChange, value }) => {
    return (
        <input
            type="text"
            onChange={onChange}
            className={cl.input}
            placeholder="Search by title"
            value={value}
        />
    );
};
