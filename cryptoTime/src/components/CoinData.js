import './CoinData.css';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Cryptocoin from './CryptoCoin';
import Spinner from './spinner';
import axios from 'axios';


function CoinData()
{
let crypto = useParams();
let id = crypto.id;

const [coin , setCoin] = useState([]);

useEffect(()=>{
 axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
.then((r)=>{setCoin(r.data)});
},[])

// console.log(coin);

return <>
 {(coin.length != 0)?<Cryptocoin crypto={coin}></Cryptocoin>:<Spinner/>}
</>

};

export  default CoinData;