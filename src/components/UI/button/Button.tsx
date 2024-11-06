import React, { ReactNode } from 'react';

interface Button {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<Button> = ({ className, children, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};
