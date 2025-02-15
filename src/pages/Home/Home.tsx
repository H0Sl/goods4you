import { Catalog } from 'components/catalog';
import { FAQ } from 'components/faq';
import { Header } from 'components/header';

const Home = () => {
    return (
        <>
            <Header />
            <Catalog />
            <FAQ />
        </>
    );
};

export default Home;
