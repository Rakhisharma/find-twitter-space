import React, { ReactElement } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

import { GroupValue, Value } from './types';
import useStyles from './styles';

interface Props {
    onChange: (newValue: Value | Array<Value>) => void;
    onBlur: () => void;
    items: Array<Value | GroupValue>;
    isMinimized: boolean;
    error: boolean;
    variant: TextFieldProps['variant'];
    classes?: TextFieldProps['classes'];
    helperText?: string;
    value?: Value | Array<Value | GroupValue>;
    label?: string;
    onSelect?: () => void;
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
    classes
}: Props): ReactElement => {
    const { input, label: labelClass } = useStyles({
        isMinimized
    });

    const getEventValue = (value: string) => {
        const item = items.find(opt => 'id' in opt && opt.id === value);
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
            classes={classes}
            label={label}
            variant={variant}
            value={
                Array.isArray(value)
                    ? value
                    : value && 'id' in value && value.id
            }
            error={error}
            helperText={helperText}
            onBlur={onBlur}
            onChange={event => {
                const value = getEventValue(event as unknown as string);
                if (value) {
                    onChange(value as Value);
                }
            }}
            InputLabelProps={{ classes: { root: labelClass } }}
            InputProps={{
                classes: { input }
            }}
            SelectProps={{
                multiple: Array.isArray(value)
            }}
        ></TextField>
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
export type { Props };
