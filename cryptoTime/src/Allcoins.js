import logo from './logo.svg';
import { useEffect,useState,useRef } from 'react';
import './App.css';
import axios from 'axios';
import  Coins  from './components/Coins.js';
import Spinner from './components/spinner';
import Searchbar from './Searchbar';


function Allcoins() {
  
  let showM = useRef();
  let spin = useRef();

  console.log("run");

  const [loading,setLoading] = useState(true);
  const [coins,setCoins] = useState([]); 
  const [coinsAll,setCoinsAll] = useState([]); 

  let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  useEffect(()=>{
   axios.get(url).then((r)=>{
    setCoinsAll(r.data);
    setCoins(r.data.slice(0,15));
    setLoading(false);
   });
  },[])


  function changeState()
  {
    setCoins(coinsAll);
    showM.current.style.display = "none" ;
  }

  return (
  <>
        <Searchbar coinSetter={setCoins} coins={coinsAll}></Searchbar>
        <h1 className='h1-margin'>Popular Cryptocurrencies</h1>
        <div className="title">
        <p>Name</p>
        <p></p>
        <p>Last price</p>
        <p className='reverseText'>Change (24hrs)</p>
        <p className='reverseText ath'>All time  high</p>
      </div>
         {/* <Spinner ref={spin}></Spinner> */}
         { !loading ? coins.map((e)=><Coins coin={e}/>):<Spinner></Spinner>}
         {coins.length<1?"No Coins Found":""}

         <button className='show' onClick={changeState} ref={showM}>Show more</button>

  </>
  );
}

export default Allcoins;
