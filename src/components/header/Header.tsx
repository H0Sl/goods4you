import NavBar from '../navbar/NavBar';
import './Header.module.css';
import '../../style/container.css';

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <NavBar/>
        </div>
    </header>
  )
};

export default Header;
