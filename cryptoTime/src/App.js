import Allcoins from "./Allcoins";
import Header from "./components/Header";
import CoinData from "./components/CoinData";
import Footer from "./Footer";
import {BrowserRouter as Router , 
    Routes,
    Route
 } from 'react-router-dom';
import Coins from "./components/Coins";
import {useEffect} from 'react';
import React from "react";

function App()
{
    useEffect(()=>{
        if(window.outerWidth<450)
        {
            alert("Please Use PC for Better Experience\n-venom")
        }
    },[])
   

    return <>
    <Router>
     <Header></Header>
     <Routes>
     <Route path={'/'} index element={<Allcoins></Allcoins>}></Route>   
     <Route path={'/coin/:id'} element={<CoinData></CoinData>}></Route>
     </Routes>
     
     <Footer></Footer>
     
    </Router>
    </>;
}

export default App;
