import axios from 'axios';

import React, { useEffect } from 'react';


function Home() {
    async function getClient() {
        try {
          const response = await axios.get('client/getAll');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
        console.log("getClienttttttt");
        getClient();
      }, [""]);
    return ( <h1>df</h1> );
}

export default Home;