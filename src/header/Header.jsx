import { Link } from 'react-router-dom';
import { HeaderWrap } from './headerStyle';
import NavBar from './NavBar';
const Header = () => {
    return (
        <HeaderWrap>
            <div className='inner'>
                <div className="start-container">
                    <NavBar />
                </div>
            </div>
        </HeaderWrap>
    );
};

export default Header;