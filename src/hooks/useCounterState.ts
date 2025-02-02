import { useState } from 'react';

export const useCounterState = (
    initialState: number,
    onChange?: (newQuantity: number) => void,
) => {
    const [state, setState] = useState(initialState);

    const onMinusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (state > 0) {
            setState(prev => {
                const newQuantity = prev - 1;
                onChange?.(newQuantity);
                return newQuantity;
            });
        }
    };

    const onPlusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setState(prev => {
            const newQuantity = prev + 1;
            onChange?.(newQuantity);
            return newQuantity;
        });
    };

    return {
        state,
        onMinusValue,
        onPlusValue,
    };
};
