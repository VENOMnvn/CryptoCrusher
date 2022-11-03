import './Header.css';
import venom from './venom.jpg';
import {Link} from 'react-router-dom';
import { useRef } from 'react';

function Header()
{
 let  homeIcon = useRef();
 let alerBox = useRef();


  function checkURL()
  {
    if(window.location.pathname == '/')
    {
         alerBox.current.style.display = "inline";
         setTimeout(()=>{alerBox.current.style.display="none";} , 1500);
    }
  }

    return <> 
    <div className="alert" ref={alerBox}>
      You already on Home
    </div>
     <header>
        <div className='brand-placeholder'>
         <img src={venom} alt="" />
         <div className='developer'>
          Crypto Crusher
          <span>by Naveen Chaudhary</span>
        </div>
        </div>
        <div className='home' ref={homeIcon}>
        <Link to={'/'}> <i class="fa-solid fa-house fa-2x" onClick={checkURL}></i></Link>
        Home
        </div>
     </header>
    </>;
}

export default Header;