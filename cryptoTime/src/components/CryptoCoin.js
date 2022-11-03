import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './CoinData.css';
import './CryptoCoin.css';
import Live_data from './Live_data';
import Performance from './Performance';
function Cryptocoin(vis)
{

let coin = vis.crypto;

let h24 = Number(coin.market_data.price_change_percentage_24h).toFixed(2);
let d7 = Number(coin.market_data.price_change_percentage_7d).toFixed(2);
let d30 = Number(coin.market_data.price_change_percentage_30d).toFixed(2);


return <>
{/* <Link to={'/'}>Home</Link> */}
  <div className='Cryptocoin'>

  <div className='cryptoTitle'>
   <img src={coin.image.small}/>
   <div>{coin.name} Price</div>
   <p>({coin.symbol.toUpperCase()})</p>
  </div>

 <div className="cryptoBody">
  <div>
    <p className='CryptoPrice'>₹ {coin.market_data.current_price.inr}</p>
  </div>
  <p className={h24<0?"red":"green"}> {h24>0?"+":""}
  {h24}%
  </p>
 </div>
    {/* <p className="usd">$ {coin.market_data.current_price.usd}</p> */}
  </div>
   
  <div className="Bio">
   {/* {coin.description.en}   */}
  </div> 

  <div className="analysis">
    <Live_data coin={coin}></Live_data>
    <h2 className='h2-performance'>{coin.symbol.toUpperCase()} Performance INR</h2>
    <Performance coin={coin}></Performance>
  </div>



</>

};

export  default Cryptocoin;