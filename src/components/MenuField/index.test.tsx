import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import MenuField from './index';

describe('Component <MenuField />', () => {
    const items = [
        { id: 'test', value: 'Test' },
        { id: 'test_2', value: 'Test 2' }
    ];

    it('should render', () => {
        const item = items[0];
        render(<MenuField value={item} items={items} />);
        const component = screen.getByDisplayValue(item.id);

        expect(component).toBeTruthy();
    });

    it('should render label', () => {
        const item = items[0];
        const label = 'Test Label';
        render(<MenuField value={item} items={items} label={label} />);
        const component = screen.getByText(label);

        expect(component).toBeTruthy();
    });

    it('should trigger change', async () => {
        const handleChange = jest.fn();
        render(
            <MenuField value={items[0]} onChange={handleChange} items={items} />
        );

        const component = screen.getByRole('button');

        fireEvent.mouseDown(component);

        const item = screen.getByText(items[1].value);

        fireEvent.click(item);

        await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
    });
});
