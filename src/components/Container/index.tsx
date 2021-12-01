import { ReactElement, useState } from 'react';
import { useAsyncEffect } from 'use-async-effect';
import { Grid, Typography } from '@material-ui/core';
import Search from '../Search';
import MenuField from '../MenuField';
import Card from '../Card';

import useStyles from './styles';
import { ALL_MENUFIELD_ITEM, LIST_ITEMS } from './constants';
import { Value } from './types';
import fetchList from '../../api/';
import { Data, SpacesData, UserData } from '../../api/type';

const Component = (): ReactElement => {
    const { root, titleText } = useStyles();
    const [data, setData] = useState<Data>();
    const [pattern, setPattern] = useState<string>('');
    const [filter, setFilter] = useState<Value>(ALL_MENUFIELD_ITEM);

    useAsyncEffect(
        async isMounted => {
            const handleSearch = () => {
                if (pattern === '' && filter === ALL_MENUFIELD_ITEM) {
                    return '';
                } else if (pattern !== '' && filter === ALL_MENUFIELD_ITEM) {
                    return pattern;
                } else {
                    return filter.value;
                }
            };

            const searchData = handleSearch();
            console.log(searchData);

            const newData = await fetchList(searchData);
            if (!isMounted()) return;

            setData(newData);
        },
        [pattern, filter]
    );

    const isSearch = () => {
        if (pattern !== '' && filter !== ALL_MENUFIELD_ITEM) return true;
    };

    const spacesData = data?.data as Array<SpacesData>;
    const userData = data?.includes as Array<UserData>;

    return (
        <Grid container spacing={4} className={root}>
            <Grid item>
                <Typography variant="h2" className={titleText}>
                    <strong>Search for Twitter Spaces </strong>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Search
                    fullWidth
                    placeholder="Search Twitter Spaces"
                    value={pattern}
                    onChange={newValue => {
                        setPattern(newValue);
                        setFilter(ALL_MENUFIELD_ITEM);
                    }}
                    onSubmit={() => {
                        setPattern(pattern);
                        setFilter(ALL_MENUFIELD_ITEM);
                    }}
                >
                    <MenuField
                        label="Filter Spaces Category"
                        items={[ALL_MENUFIELD_ITEM, ...LIST_ITEMS]}
                        value={filter}
                        variant="outlined"
                        onChange={newValue => {
                            const newFilter = newValue as Value;
                            setFilter(newFilter);
                            setPattern('');
                        }}
                    />
                </Search>
            </Grid>
            {spacesData &&
                userData &&
                userData.map((item, index) => {
                    return spacesData.map((user, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <Card
                                    data={[{ userData: item, spaceData: user }]}
                                />
                            </Grid>
                        );
                    });
                })}
        </Grid>
    );
};

export default Component;

//TODO
//1. get data here
// use that data to show it in the UI
//remove usused modules
//improve the structure of the project
// improve types and remove 'any' type from project
// write readme file
// write how to use
// write how to contribute
// how things to improve section
