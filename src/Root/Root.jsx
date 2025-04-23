import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Scrolltop from '../Components/Scrolltop';
import useNotFound from '../Hook/useNotFound'

const Root = () => {
    const [notfound, setNotFound] = useNotFound();
    return (
        <div>
            <Scrolltop></Scrolltop>
            <Navbar></Navbar>
           <div className='min-h-screen'>
           <Outlet context={[setNotFound]}></Outlet>
           </div>

           {!notfound&& <Footer></Footer>}
            
           
        </div>
    );
};

export default Root;