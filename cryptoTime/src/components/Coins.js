import './Coins.css';
import {Link} from 'react-router-dom';

const Coins = (data)=>{
    
    let per = data.coin.price_change_percentage_24h ;
    per = Number(per);
    per = per.toFixed(2);
    
    return <>

    <Link to={`/coin/${data.coin.id}`}>
<div className="coin">
<div><img src={data.coin.image} alt="" /></div>
<div className='coinName'>{data.coin.name} <div>{data.coin.symbol.toUpperCase()}</div> </div>
<div>₹ {data.coin.current_price}</div>
<div className={((per<0)?"red":"green")+" "+"percent"}>{per>0?"+":""}{per} %</div>
<div className="marketcap">₹ {data.coin.ath}</div>
</div>
</Link>
</>;

};

export default Coins;