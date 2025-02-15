import { describe, beforeEach, test, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '../../../src/components/UI/input/Input';
import userEvent from '@testing-library/user-event';

describe('Тестирование Input', () => {
    describe('Тестирование базовых свойств', () => {
        const inputValue = 'test input value';
        const onChangeInput = vi.fn();
        const inputPlaceholder = 'test input placeholder';
        let input: HTMLInputElement;
        beforeEach(() => {
            render(
                <Input
                    value={inputValue}
                    onChange={onChangeInput}
                    placeholder={inputPlaceholder}
                />,
            );
            input = screen.getByPlaceholderText(
                inputPlaceholder,
            ) as HTMLInputElement;
        });

        test('check default value', () => {
            expect(input.value).toBe(inputValue);
        });

        test('input use html tag input', () => {
            expect(input.tagName).toBe('INPUT');
        });

        test('user change data - called onChange callback', async () => {
            await userEvent.type(input, 'text');
            expect(onChangeInput).toHaveBeenCalledTimes(4);

            expect(onChangeInput).toHaveBeenCalledWith(
                expect.objectContaining({
                    target: expect.objectContaining({ value: inputValue }),
                }),
            );
        });
    });
});
