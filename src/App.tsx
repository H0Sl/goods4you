import PageRouter from 'components/PageRouter';
import 'style/main.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToAnchor from 'components/ScrollToHashElement';
import { CartLoading } from 'components/cart-loading';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <CartLoading />
                <ScrollToAnchor />
                <PageRouter />
            </BrowserRouter>
        </div>
    );
};

export default App;
