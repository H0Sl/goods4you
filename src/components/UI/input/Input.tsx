import React, { ChangeEvent } from 'react';
import cl from './Input.module.css';
interface InputProps {
    onInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ onInput }) => {
    return (
        <input
            type="text"
            onInput={onInput}
            className={cl.input}
            placeholder="Search by title"
        />
    );
};
