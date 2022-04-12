import React from 'react';
import NavbarClient from './NavbarUser';
import NavbarConnecte from './NavbarConnecte';

function Navbar () {
    return ( localStorage.getItem('ClientInfo') ?
    <NavbarClient/> :

         <NavbarConnecte /> );
}

export default Navbar ;