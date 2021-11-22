import useStyles from './styles';

import Header from './components/Header';
import Container from './components/Container';

const App = () => {
    const { root } = useStyles();

    return (
        <div className={root}>
            <Header />
            <Container
                onSubmit={() => {
                    //do nothing
                }}
            />
        </div>
    );
};

export default App;
