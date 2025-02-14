import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../../src/components/UI/button';

describe('Тестирование Button', () => {
    test('вызывает onClick при клике', async () => {
        const onClick = vi.fn();
        render(
            <Button variant="btnText" onClick={onClick}>
                Click me
            </Button>,
        );
        const button = screen.getByRole('button', { name: /click me/i });
        await userEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('отключается, если disabled равен true', () => {
        render(
            <Button variant="btnText" disabled>
                Click me
            </Button>,
        );
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeDisabled();
    });

    test('отображает children, если loader равен false', () => {
        render(<Button variant="btnText">Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toHaveTextContent('Click me');
    });
});
