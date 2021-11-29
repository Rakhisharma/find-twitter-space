import { Grid, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import useStyles from './styles';
import { GITHUB_LINK, TWITTER_LINK } from './constants';

const Header = () => {
    const { root } = useStyles();

    return (
        <Grid container spacing={2} className={root}>
            <Grid container spacing={3} justifyContent="flex-end">
                <Grid item>
                    <Link href={TWITTER_LINK} target="_blank">
                        <TwitterIcon fontSize="large" htmlColor="black" />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href={GITHUB_LINK} target="_blank">
                        <GitHubIcon fontSize="large" htmlColor="black" />
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Header;
