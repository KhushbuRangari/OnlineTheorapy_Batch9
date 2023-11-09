import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';

function Layouts() {
  return (
    <div>

        
        <Header></Header>
        <main style={{height:"80%"}}>
            <HomePage/>
        </main>
        <Footer></Footer>

    </div>
  )
}

export default Layouts