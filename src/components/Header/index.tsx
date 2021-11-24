import { Grid, Link } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

import useStyles from './styles';
import { GITHUB_LINK, TWITTER_LINK } from './constants';

const Header = () => {
    const { root } = useStyles();

    return (
        <Grid container spacing={2} className={root}>
            <Grid container spacing={3} xs={12} justify="flex-end">
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
