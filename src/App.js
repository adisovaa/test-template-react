import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Banner from './components/Content/Banner/banner';
import Text from "./components/Content/Text/text";
import Cards from "./components/Slider/slider";
import Input from "./components/Input/input";
import Footer from "./components/Footer/footer";

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <Banner/>
            <Text/>
            <Cards/>
            <Input/>
            <Footer/>
        </div>
    )
}

export default App