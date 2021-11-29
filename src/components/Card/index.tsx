import { CardActions, Link } from '@material-ui/core';
import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material';
import moment from 'moment';

import { ReactElement } from 'react';
import { Data } from './type';

interface Props {
    data: Array<Data>;
}

const Component = ({ data }: Props): ReactElement => {
    //move this fun to utils
    const spaceLink = (id: string) => {
        return `twitter.com/i/spaces/${id}`;
    };
    //move this fun to utils
    const scheduledDate = (scheduleDate: string): string => {
        const date = new Date(scheduleDate);
        return moment(date).utc().format('YYYY MMM ddd  HH:mm');
    };

    //move this fun to utils
    const getCorrectSizeImage = (imageUrl: string): string => {
        let url = imageUrl.toString().replace(/normal/g, '400x400');

        return url;
    };

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={getCorrectSizeImage(data[0].userData.profileImage)}
                alt="profile picture"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                        component="div"
                        variant="body1"
                        color="text.primary"
                    >
                        {data[0].spaceData.title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                    >
                        {scheduledDate(data[0].spaceData.scheduledStart)} UTC
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        pl: 1,
                        pb: 1,
                        flexDirection: 'row'
                    }}
                >
                    <CardActions>
                        <Link
                            href={`https://twitter.com//${data[0].userData.userName}`}
                            target="_blank"
                        >
                            @{data[0].userData.userName}
                        </Link>

                        <Link
                            href={spaceLink(data[0].spaceData.id)}
                            target="_blank"
                        >
                            Join here
                        </Link>
                    </CardActions>
                </Box>
            </Box>
        </Card>
    );
};

export default Component;
