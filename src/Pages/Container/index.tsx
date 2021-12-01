import { ReactElement, useState } from 'react';
import { useAsyncEffect } from 'use-async-effect';
import { Grid, Typography } from '@material-ui/core';
import Search from '../../components/Search';
import MenuField from '../../components/MenuField';
import Card from '../../components/Card';

import useStyles from './styles';
import { ALL_MENUFIELD_ITEM, LIST_ITEMS } from './constants';
import { Value } from './types';
import { Data as DataAll } from '../../components/Card/type';
import fetchList from '../../api';
import { Data, SpacesData, UserData } from '../../api/type';

const Component = (): ReactElement => {
    const { root, titleText } = useStyles();
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Data>();
    const [pattern, setPattern] = useState<string>('');
    const [filter, setFilter] = useState<Value>(ALL_MENUFIELD_ITEM);

    useAsyncEffect(
        async isMounted => {
            setLoading(true);
            const handleSearch = () => {
                if (pattern === '' && filter === ALL_MENUFIELD_ITEM) {
                    return '';
                } else if (pattern !== '' && filter === ALL_MENUFIELD_ITEM) {
                    setFilter(ALL_MENUFIELD_ITEM);
                    return pattern;
                } else if (pattern === '' && filter !== ALL_MENUFIELD_ITEM) {
                    setPattern('');
                    return filter.value;
                } else {
                    return '';
                }
            };

            const searchData = handleSearch();

            const newData = await fetchList(searchData);

            if (!isMounted()) return;

            setData(newData);

            setLoading(false);
        },
        [pattern, filter]
    );

    const spacesData = data?.data as Array<SpacesData>;
    const userData = data?.includes as Array<UserData>;

    const newData = () => {
        if (!userData && !spacesData) return;

        return spacesData.map(spacesItem => ({
            ...userData.find(
                userItem => userItem.userId === spacesItem.creatorId && userItem
            ),
            ...spacesItem
        }));
    };

    console.log(newData());

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
                    onChange={newValue => setPattern(newValue)}
                    onSubmit={() => {
                        setPattern(pattern);
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
                        }}
                    />
                </Search>
            </Grid>
            {!newData()
                ? !loading && (
                      <Grid item xs={4}>
                          <Typography variant="subtitle2" component="div">
                              No result Found
                          </Typography>
                      </Grid>
                  )
                : (newData() as Array<DataAll>).map((item, index) => {
                      return (
                          <Grid item xs={4} key={index}>
                              <Card data={item} />
                          </Grid>
                      );
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
