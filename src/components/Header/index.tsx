import { Grid, Link, Typography } from '@material-ui/core';

import useStyles from './styles';
import {
    GITHUB_ISSUE,
    REPORT_ISSUE,
    TWITTER_LINK,
    CREATED_BY,
    TWITTER_USER
} from './constants';

const Header = () => {
    const { root } = useStyles();

    return (
        <Grid container spacing={3} className={root}>
            <Grid container spacing={4} xs={12} justify="flex-end">
                <Grid item>
                    <Link href={GITHUB_ISSUE} target="_blank">
                        <Typography variant="body1">{REPORT_ISSUE}</Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Typography variant="body1">
                        {CREATED_BY}
                        <Link href={TWITTER_LINK} target="_blank">
                            {''} {TWITTER_USER}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;
