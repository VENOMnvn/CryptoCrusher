function About(data)
{
    const parse = require('html-react-parser');
    
    let coin =  data.coin;

    return <>
    <h2>About ({coin.symbol.toUpperCase()})</h2>
    <p className='about'>
       {parse(coin.description.en)}
    </p>

    </>
}

export default About;