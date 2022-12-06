import React from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import MainPage from './components/MainPage.jsx'



function App() {
    return ( <>
    <div className='main-container'>
        <div className='mainWrapper'>
        
        <Header/>
        <MainPage/>
        <Footer/>

        </div>
    </div>

    </> );
}

export default App;