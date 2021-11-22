import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import TextField from './index';

describe('Component <TextField />', () => {
    it('should render', () => {
        render(<TextField />);
        const component = screen.getByRole('textbox');

        expect(component).toBeTruthy();
    });

    it('should be disabled', () => {
        render(<TextField isEnabled={true} />);
        const component = screen.getByRole('textbox');

        expect(component).toHaveProperty('disabled', false);
    });

    it('should trigger change', () => {
        const handleChange = jest.fn();
        render(
            <TextField label="Select" value="Test" onChange={handleChange} />
        );
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'new test' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should render select options', () => {
        const data = [
            { value: 'menu', label: 'Menu1' },
            { value: 'menu2', label: 'Menu2' }
        ];

        render(
            <TextField select SelectProps={{ native: true }}>
                {data.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
        );

        const select = screen.getAllByRole('option');

        expect(select).toHaveLength(data.length);
    });
});
