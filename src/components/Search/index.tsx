import React, { ReactElement } from 'react';
import { Button, Grid, Icon, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import TextField, { Props as TextFieldProps } from '../TextField';
import useStyles from './styles';
interface Props {
    value: string;
    onChange: (newValue: string) => void;
    placeholder: TextFieldProps['placeholder'];
    onSubmit: () => void;
    isEnabled: boolean;
    fullWidth?: TextFieldProps['fullWidth'];
    children?: ReactElement;
}

const Component = ({
    value,
    onSubmit,
    placeholder,
    fullWidth,
    onChange,
    isEnabled,
    children
}: Props): ReactElement => {
    const { searchButton } = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <TextField
                            fullWidth={fullWidth}
                            variant="outlined"
                            placeholder={placeholder}
                            value={value}
                            onChange={newValue => onChange(newValue)}
                            onKeyPress={({ key }) =>
                                key === 'Enter' && onSubmit()
                            }
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon>
                                            <Search color="action" />
                                        </Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    {children && (
                        <Grid item xs={2}>
                            {children}
                        </Grid>
                    )}
                    <Grid item>
                        <Button
                            variant="contained"
                            className={searchButton}
                            size="large"
                            onClick={() => onSubmit()}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

Component.defaultProps = {
    value: '',
    placeholder: 'Search',
    isEnabled: true,
    onSubmit: () => {
        // do nothing.
    },
    onChange: () => {
        // do nothing.
    }
};

export default Component;

export type { Props };
