import React from 'react';

function MainPage() {
    return ( 
    <>
    <main className='wrapper'>
        {/* <img src={ReactHalf} alt="" /> */}
        <div className='main-container'>
        <h1 className='main-Header'>Fun facts about React</h1>
            <ul className='main-list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
        
    </main>
    </> 
    );
}

export default MainPage;