import venom from './components/venom.jpg';
import './Footer.css'
function Footer()
{
    return <>
    <footer>
        <div>
             <img src={venom} alt="" />
        </div>
        <div>
         <h1>Naveen Chaudhary</h1>
         <h3>About</h3>
         <p>
            ReactJS developer studying Btech COMPUTER SCIENCE (Data Science)
         </p>
         <div>
            <a href=""></a>
            <a href=""></a>
         </div>
         <h4>About Project</h4>
         Crypto Information App developed by ReactJS using AXIOS API <br />
         <ul>
            <li>Use of coingecko api for Data Fetching</li>
            <li>Use of React Router </li>
         </ul>
        </div>

    </footer>
    </>
}


export default Footer;