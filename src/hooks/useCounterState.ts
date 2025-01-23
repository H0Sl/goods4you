import { useState } from 'react';

export const useCounterState = (initialState: number) => {
    const [state, setState] = useState(initialState);

    const onMinusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (state > 0) {
            setState(prev => prev - 1);
        }
    };

    const onPlusValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setState(prev => prev + 1);
    };

    return {
        state,
        onMinusValue,
        onPlusValue,
    };
};
