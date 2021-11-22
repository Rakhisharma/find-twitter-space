import { fireEvent, render, screen } from '@testing-library/react';

import Search from './index';

describe('Component <Search />', () => {
    it('should render', () => {
        render(<Search />);
        const component = screen.getByRole('textbox');

        expect(component).toBeTruthy();
    });

    it('should render value', () => {
        const value = 'new value';
        render(<Search value={value} />);
        const component = screen.getByDisplayValue(value);

        expect(component).toBeTruthy();
    });

    it('should trigger change', () => {
        const handleChange = jest.fn();
        render(<Search onChange={handleChange} />);
        const component = screen.getByRole('textbox');

        fireEvent.change(component, { target: { value: 'new value' } });

        expect(handleChange).toBeCalledTimes(1);
    });

    it('should trigger submit', () => {
        const handleSubmit = jest.fn();
        render(<Search onSubmit={handleSubmit} />);
        const component = screen.getByRole('textbox');

        fireEvent.keyPress(component, { key: 'Enter', code: 13, charCode: 13 });

        expect(handleSubmit).toBeCalledTimes(1);
    });
});
