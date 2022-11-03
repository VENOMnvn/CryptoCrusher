function Live_data(data)
{
    let coin = data.coin;

    console.log(coin.last_updated)

    let dte = new Date(coin.last_updated);
    let [hrs,sec,day,dat,min,year] = [dte.getHours(),dte.getSeconds(),dte.getDay(),dte.getDate(),dte.getMinutes(),dte.getFullYear()]

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

     let month = months[dte.getMonth()];

    return <>
     <h1 className="h1-live">{coin.symbol.toUpperCase()} Live Data</h1>
     <p>
        The Live price of {coin.id.toUpperCase()} is {coin.market_data.current_price.inr}. 
        ({coin.symbol.toUpperCase()} / INR ) today with market cap of {coin.market_data.market_cap.usd/1000000} M USD.
        <br />
         24-Hr high is <b>{coin.market_data.high_24h.inr} INR</b>
         <br />
         Last updated on {`${dat} ${month} ${year} at ${hrs>12?hrs-12:hrs} : ${min} : ${sec} ${(hrs>12)?"PM":"AM"}`}
     </p>
    </>;
}
export default Live_data;