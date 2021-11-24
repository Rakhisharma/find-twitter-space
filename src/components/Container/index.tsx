import { ReactElement, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Search from '../Search';
import MenuField from '../MenuField';
import Card from '../Card';

import useStyles from './styles';
import { ALL_MENUFIELD_ITEM, LIST_ITEMS } from './constants';
import { Value } from './types';

interface Props {
    onSubmit: (pattern: string, filter?: string) => void;
}

const Component = ({ onSubmit }: Props): ReactElement => {
    const { root } = useStyles();
    const [pattern, setPattern] = useState<string>('');
    const [filter, setFilter] = useState<Value>(ALL_MENUFIELD_ITEM);

    const handleSubmit = () => {
        onSubmit(
            pattern,
            filter.id !== ALL_MENUFIELD_ITEM.id ? filter.id : undefined
        );
    };

    console.log(filter);

    const isSearch = () => {
        if (pattern === '' && filter === ALL_MENUFIELD_ITEM) return true;
    };

    return (
        <Grid container spacing={4} className={root}>
            <Grid item xs={8}>
                <Typography variant="h2">
                    <strong>Search for Twitter Spaces </strong>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Search
                    fullWidth
                    placeholder="Search Twitter Spaces"
                    value={pattern}
                    onChange={newValue => setPattern(newValue)}
                    onSubmit={handleSubmit}
                >
                    <MenuField
                        label="Filter Spaces Category"
                        items={[ALL_MENUFIELD_ITEM, ...LIST_ITEMS]}
                        value={filter}
                        variant="outlined"
                        onChange={newValue => {
                            const newFilter = newValue as Value;
                            setFilter(newFilter);
                            onSubmit(
                                pattern,
                                newFilter.id !== ALL_MENUFIELD_ITEM.id
                                    ? newFilter.id
                                    : undefined
                            );
                        }}
                    />
                </Search>
            </Grid>
            {isSearch() &&
                [1, 2, 3, 4, 5, 6].map(index => {
                    return (
                        <Grid item xs={4} key={index}>
                            <Card />
                        </Grid>
                    );
                })}
        </Grid>
    );
};

export default Component;
