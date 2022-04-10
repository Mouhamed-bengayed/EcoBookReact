import React from 'react';
import NavbarClient from './NavbarClient';
import NavbarGuest from './NavbarGuest';
import NavbarRedacteur from './NavbarRedacteur';

function Navbar () {
    return ( localStorage.getItem('ClientInfo') ?
    <NavbarClient/>
    : localStorage.getItem('RedacteurInfo') ?
        <NavbarRedacteur />
        :
        <NavbarGuest /> );
}

export default Navbar ;