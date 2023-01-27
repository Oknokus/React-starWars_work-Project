// import cn from "classnames";
import {Routes, BrowserRouter, Route } from "react-router-dom";

import PeoplePage from "../../container/peoplePage";
import HomePage  from "../../container/homePage";
import Header from "../../components/header/Header";


import styles from './App.module.css';

function App() { 
  return (   
   <>
   <BrowserRouter>
   <Header />  
   
    <Routes>
    <Route path="/" element={ <HomePage /> }></Route>
    <Route path="/people" element={ <PeoplePage /> }></Route> 
    </Routes>
    </BrowserRouter>       
   </>
  );
}

export default App;
