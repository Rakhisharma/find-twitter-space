import React, { ReactElement } from 'react';
import { MenuItem } from '@material-ui/core';

import TextField, { Props as TextFieldProps } from '../TextField';

import { Value } from './types';
import useStyles from './styles';

interface Props {
    onChange: (newValue: Value | Array<Value>) => void;
    onBlur: () => void;
    items: Array<Value>;
    isMinimized: boolean;
    isEnabled: boolean;
    error: boolean;
    variant: TextFieldProps['variant'];
    helperText?: string;
    value?: Value | Array<Value>;
    label?: string;
}

const Component = ({
    value,
    items,
    onChange,
    label,
    isMinimized,
    onBlur,
    error,
    helperText,
    variant,
    isEnabled
}: Props): ReactElement => {
    const { input, label: labelClass } = useStyles({
        isMinimized
    });

    const getEventValue = (value: string) => {
        const item = items.find(({ id }) => id === value);
        if (!Array.isArray(value)) {
            return item;
        } else {
            return value as unknown as Array<Value>;
        }
    };

    return (
        <TextField
            select
            fullWidth
            label={label}
            variant={variant}
            isEnabled={isEnabled}
            value={Array.isArray(value) ? value : value && value.id}
            error={error}
            helperText={helperText}
            onBlur={onBlur}
            onChange={event => {
                const value = getEventValue(event);
                if (value) {
                    onChange(value);
                }
            }}
            InputLabelProps={{ classes: { root: labelClass } }}
            InputProps={{
                classes: { input }
            }}
            SelectProps={{
                multiple: Array.isArray(value)
            }}
        >
            {items.map(({ id, value }) => (
                <MenuItem value={id} key={`item-${id}`}>
                    {value}
                </MenuItem>
            ))}
        </TextField>
    );
};

Component.defaultProps = {
    items: [],
    variant: 'filled',
    isMinimized: false,
    isEnabled: true,
    onChange: () => {
        // do nothing.
    },
    onBlur: () => {
        // do nothing.
    },
    error: false
} as Partial<Props>;

export default Component;
