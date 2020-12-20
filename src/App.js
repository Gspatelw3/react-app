import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Process from './components/process/Process'
import AboutIntro from './components/about-intro/About-intro'
import Review from './components/review/Review'
import Customer from './components/customer/Customer';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Process />
      <AboutIntro />
      <Review />
      <Customer />
      <Footer/>     
    </div>
  );
}
export default App;
