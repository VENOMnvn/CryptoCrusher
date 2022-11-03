import './Searchbar.css';
import {useState,useRef} from 'react';

function Searchbar(props)
{
    let val = useRef();
    
    let setCoin = props.coinSetter;
    let coins = props.coins;
    
    
    function searchBitcoin()
    {
       let x =  val.current.value;

       let filteredCoins = coins.filter((e)=>{
       return (e.id.includes(x))
       }); 
       setCoin(filteredCoins);

    }
    return <>
    <div className="search">
         <div className='searchIcon' onClick={searchBitcoin}>
          <i class="fa-solid fa-magnifying-glass"></i>
         </div>
        <input type="text" placeholder='Search...' ref={val}/>
    </div>
    </>
}

export default Searchbar;