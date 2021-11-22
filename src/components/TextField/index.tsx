import React, { ReactElement } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

interface Props {
    onChange: (newValue: string) => void;
    isEnabled: boolean;
    value: TextFieldProps['value'];
    variant: TextFieldProps['variant'];
    classes?: TextFieldProps['classes'];
    rows?: TextFieldProps['rows'];
    rowsMax?: TextFieldProps['rowsMax'];
    onFocus?: TextFieldProps['onFocus'];
    helperText?: string;
    error?: TextFieldProps['error'];
    inputRef?: TextFieldProps['inputRef'];
    inputProps?: TextFieldProps['inputProps'];
    InputProps?: TextFieldProps['InputProps'];
    InputLabelProps?: TextFieldProps['InputLabelProps'];
    onKeyPress?: TextFieldProps['onKeyPress'];
    onMouseDown?: TextFieldProps['onMouseDown'];
    type?: TextFieldProps['type'];
    label?: string;
    select?: TextFieldProps['select'];
    onBlur?: TextFieldProps['onBlur'];
    fullWidth?: TextFieldProps['fullWidth'];
    isMultiline?: TextFieldProps['multiline'];
    placeholder?: TextFieldProps['placeholder'];
    children?: TextFieldProps['children'];
    SelectProps?: TextFieldProps['SelectProps'];
}

const Component = ({
    label,
    onChange,
    onBlur,
    placeholder,
    variant,
    fullWidth,
    isMultiline,
    inputProps,
    InputProps,
    InputLabelProps,
    SelectProps,
    onKeyPress,
    type,
    inputRef,
    children,
    select,
    isEnabled,
    value,
    helperText,
    onMouseDown,
    error,
    classes,
    rows,
    rowsMax
}: Props): ReactElement => {
    const handleInputChange: TextFieldProps['onChange'] = ({ target }) => {
        onChange(target.value);
    };

    return (
        <TextField
            aria-disabled={!isEnabled}
            label={label}
            value={value}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            select={select}
            variant={variant}
            fullWidth={fullWidth}
            multiline={isMultiline}
            inputRef={inputRef}
            InputProps={InputProps}
            inputProps={inputProps}
            InputLabelProps={InputLabelProps}
            onChange={handleInputChange}
            SelectProps={SelectProps}
            onKeyPress={onKeyPress}
            onMouseDown={onMouseDown}
            disabled={!isEnabled}
            helperText={helperText}
            error={error}
            classes={classes}
            rows={rows}
            rowsMax={rowsMax}
        >
            {children}
        </TextField>
    );
};

Component.defaultProps = {
    value: '',
    onChange: () => {
        // do nothing.
    },
    variant: 'filled',
    isEnabled: true
} as Partial<Props>;

export default Component;
export type { Props };
