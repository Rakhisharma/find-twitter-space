import { makeStyles } from '@material-ui/core/styles';

interface StyledProps {
    isMinimized: boolean;
}

const styles = makeStyles(({ spacing }) => ({
    input: ({ isMinimized }: StyledProps) => ({
        paddingTop: isMinimized ? spacing(1) : undefined,
        paddingBottom: isMinimized ? spacing(1) : undefined
    }),
    label: {
        whiteSpace: 'nowrap'
    }
}));

export default styles;
