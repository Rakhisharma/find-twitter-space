import useStyles from './styles';

import Header from './components/Header';
import Container from './components/Container';

const App = () => {
    const { root } = useStyles();

    return (
        <div className={root}>
            <Header />
            <Container />
        </div>
    );
};

export default App;
