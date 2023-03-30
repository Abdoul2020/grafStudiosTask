import Header from '../components/navbar/header';
import React, { useEffect } from 'react';


function GlobalControllerLayout({children}) {

    

    return (
        <div>
            <Header />
            {children}

            

        </div>
    )
}

export default GlobalControllerLayout