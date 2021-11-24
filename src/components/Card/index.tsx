import { Card, CardMedia, Box, CardContent, Typography } from '@mui/material';

const Component = () => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://pbs.twimg.com/profile_images/1379524160876085264/O1m1NMer_400x400.jpg"
                alt="profile picture"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Title of space
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        Description test for twitter spaces
                    </Typography>
                </CardContent>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}
                >
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        @atbrakhi
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default Component;
