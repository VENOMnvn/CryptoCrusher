import About from "./About";
function Performance(data)
{
   let coin = data.coin;


   let live = coin.market_data.current_price;
   let d7 = coin.market_data.price_change_percentage_7d.toFixed(2);
   let d30 = coin.market_data.price_change_percentage_30d.toFixed(2);
   let d60 = coin.market_data.price_change_percentage_60d.toFixed(2);
   let y1 = coin.market_data.price_change_percentage_1y.toFixed(2);
    









    return <>
    <div className="performance">
      <div className="perform greybg">
        <div>Change</div>
        <div>Amount</div>
        <div>%</div>
      </div>

      <div className="perform">
        <div>Week</div>
        <div></div>
        <div className={d7<0?"red":"green"}>{d7>0?"+":""}{d7} %</div>
      </div>

      <div className="perform">
        <div>30 Days</div>
        <div></div>
        <div className={d30<0?"red":"green"}>{d30>0?"+":""}{d30} %</div>
        
      </div>

      <div className="perform">
        <div>60 Days</div>
        <div></div>
        <div className={d60<0?"red":"green"}>{d60>0?"+":""}{d60} %</div>
    
      </div>

      <div className="perform">
        <div>1 Year</div>
        <div></div>
        <div className={y1<0?"red":"green"}>{y1>0?"+":""}{y1} %</div>
      </div>
    </div>


    <h2>{coin.symbol.toUpperCase()} Market Information</h2>
    <div className="alltime">
    <div><h5>Popularity</h5>#{coin.market_data.market_cap_rank}</div>
    <div><h5>Market Cap</h5>R {(coin.market_data.market_cap.inr/1000000000).toFixed(2)} B</div>
    <div><h5>Total Volume</h5>{(coin.market_data.total_volume.inr/1000000000).toFixed(2)} B</div>
    <div><h5>Supply</h5>{coin.market_data.total_supply/1000000} M</div>
    </div>
    <About coin={coin}></About>
    </>;
}


export default Performance;