import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = () => {
    return (
        <div className='wrap'>
            <Header/>
            <div className='main'>
                <Outlet/>
            </div>
            <Footer />            
        </div>
    );
};

export default Layout;
