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
            <Link
                href={`https://twitter.com//${data.userName}`}
                target="_blank"
                underline="none"
            >
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={getCorrectSizeImage(data.profileImage)}
                    alt="profile picture"
                />
            </Link>

            <CardContent>
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
                <Link href={spaceLink(data.id)} underline="none">
                    Link to space
                </Link>
            </CardContent>
        </Card>
    );
};

export default Component;
