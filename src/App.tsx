import useStyles from './styles';

import Header from './components/Header';
import Container from './components/Container';
import api from './api/index';

const App = async () => {
    const { root } = useStyles();
    //test api data
    const data = await api().then(item => console.log('item', item));

    console.log('data', data);

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
