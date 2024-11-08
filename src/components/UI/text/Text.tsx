import React, { ReactNode } from 'react';
import cl from './Text.module.css';
import cn from 'classnames';

interface propsText {
    children: ReactNode;
    tag: 'span' | 'p';
    className: string;
    fontSize?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    fontWeight?: 'regular' | 'medium' | 'semiBold';
}

export const Text: React.FC<propsText> = ({
    tag: Component = 'p',
    children,
    className,
    fontSize = 's',
    fontWeight = 'regular',
}) => {
    return (
        <Component className={cn(className, cl[fontSize], cl[fontWeight])}>
            {children}
        </Component>
    );
};
