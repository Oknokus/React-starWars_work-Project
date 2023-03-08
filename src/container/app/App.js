import {Routes, BrowserRouter, Route } from "react-router-dom";

import Header from "../../components/header/Header";

import { routesConfig } from "../../routing/routesConfig";

import { REPO_NAME } from "../../constants/repo_name";

import styles from './App.module.css';

function App() { 
  return (   
   <>
   <BrowserRouter basename={`/${REPO_NAME}/`}>
   <div className={styles.wrapper}>
   <Header />  

   <Routes>  
    {
      routesConfig.map((route, index) => (
                        <Route
                            key={ index }
                            path={ route.path }
                            element={ route.element }
                        />
                    ))
    }
     </Routes>

     </div>
    </BrowserRouter>       
   </>
  );
}

export default App;
