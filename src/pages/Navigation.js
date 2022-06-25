import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useUserContext } from '../providers/UsersProfider';

import '../style/navigation.css';

import logoPhone from '../img/phone-logo.png';

const Navigation = () => {

  const { users, setDisplayUsers } = useUserContext();
  const [ searchInput, setSearchInput ] = useState('');

  const inputHandler = ( event ) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  useEffect( () => {
    const updateUsers = users.filter( user => (
      (user.name.toLowerCase()).includes(searchInput.toLowerCase())
      ||
      (user.email.toLowerCase()).includes(searchInput.toLowerCase())
      ||
      (user.phone.toLowerCase()).includes(searchInput.toLowerCase())
    ));
    setDisplayUsers(updateUsers);
  }, [searchInput]);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><img src={logoPhone} alt='icon/logo phone menu' width='30' height='30' /></li>
          <li><Link to='/addusers'>AddUsers</Link></li>
          <li><input id='search' type='text' role='searchbox' placeholder='Search' value={searchInput} onChange={inputHandler} /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation