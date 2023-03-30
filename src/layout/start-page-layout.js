import React from 'react'

function StartPageLayout({ children, imagePath, headerTitle }) {

   

    
    return (

        <div className='gradient-bg starting-pages'>
            <div className='logo-area'>
                <div className='logo'>
                    <img src={imagePath}></img>
                </div>
            </div>
            <div className='content-area'>
                <div className='content-card'>

                    <div className='content-header'>{headerTitle}</div>
                    <div className='content-scroll'>
                        <div className='content-in'>
                            {children}
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StartPageLayout