import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import MainHeader from './MainHeader';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;