import { Link } from 'react-router-dom';
import '../style/footer.css';

import logoFacebook from '../img/fb-logo.svg';
import istaLogo from '../img/ista-logo.svg';
import twetLogo from '../img/twet-logo.svg';
import trashLogo from '../img/logo-trash.svg';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <h2>&copy; Marcin Lachman - 2022</h2>
          <p>
          <img 
            src={logoFacebook} 
            alt="icon facebook" 
            width="30" 
            height="30" 
          />
          <img 
            src={istaLogo} 
            alt="icon istagram" 
            width="30" 
            height="30" 
          />
          <img 
            src={twetLogo} 
            alt="icon twitter" 
            width="30" 
            height="30" 
          />
        </p>
        </li>
        <li>
          <p>
            <input 
              type="text" 
              placeholder="Email Address"
            />
            <button>Submit</button>
          </p>
        </li>
        <li>
        <Link to={`/delete`}>
          <img 
            src={trashLogo} 
            alt="icons facebook" 
            width="70" 
            height="70" 
          />
        </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer