import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { AddInfo } from '../../src/components/faq-add-info';
import { InfoItem } from 'components/faq-add-info/AddInfo';

// Мок данных
const mockInfo: InfoItem[] = [
    {
        title: 'Question 1',
        text: 'Answer 1',
    },
    {
        title: 'Question 2',
        text: 'Answer 2',
    },
];

describe('AddInfo component', () => {
    test('should render all items', () => {
        render(<AddInfo info={mockInfo} />);

        // Проверяем, что все заголовки отображаются
        mockInfo.forEach(item => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });

    test('should render correct HTML structure', async () => {
        render(<AddInfo info={mockInfo} />);

        mockInfo.forEach(item => {
            const titleElement = screen.getByText(item.title);
            expect(titleElement.tagName).toBe('H3');
        });

        const firstItemTitle = screen.getByText(mockInfo[0].title);
        await userEvent.click(firstItemTitle);
        const textElement = screen.getByText(mockInfo[0].text);
        expect(textElement.tagName).toBe('P');
    });
});
