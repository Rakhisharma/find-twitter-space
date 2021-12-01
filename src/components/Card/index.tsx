import { ReactElement } from 'react';
import {
    Card,
    CardMedia,
    Box,
    CardContent,
    Typography,
    CardActions,
    Link
} from '@mui/material';

import { Data } from './type';
import { spaceLink, scheduledDate, getCorrectSizeImage } from './utils';

interface Props {
    data: Data;
}

const Component = ({ data }: Props): ReactElement => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={getCorrectSizeImage(data.profileImage)}
                alt="profile picture"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                        component="div"
                        variant="body1"
                        color="text.primary"
                    >
                        {data.title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                    >
                        {scheduledDate(data.scheduledStart)}
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
                            href={`https://twitter.com//${data.userName}`}
                            target="_blank"
                        >
                            @{data.userName}
                        </Link>

                        <Link href={spaceLink(data.id)} target="_blank">
                            Join here
                        </Link>
                    </CardActions>
                </Box>
            </Box>
        </Card>
    );
};

export default Component;
