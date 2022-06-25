import { useState } from 'react';
import { useUserContext } from '../providers/UsersProfider';
import { useNavigate } from 'react-router-dom'

import '../style/addUsers.css';

const AddUsers = () => {

  const { setUsers, users } = useUserContext();
  const navigation = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ website, setWebsite ] = useState('');
  const [ text, setText ] = useState('');

  const [ street, setStreet ] = useState('');
  const [ city, setCity ] = useState('');
  const [ zipcode, setZipcode ] = useState('');
  const [ country, setCountry ] = useState('');

  const handleButton = () => {
    const idLenght = users.length;

    setUsers([
      ...users,
      {
        id: idLenght,
        name,
        email,
        phone,
        website,
        text,
        street,
        city,
        zipcode,
        country,
        active: true
      }
    ]);
    navigation('/')
  };

  return (
    <div className='container'>
      <div className='addUsers'>
        <form onSubmit={ (event) => event.preventDefault() }>
        <h2>Insert Data : </h2>
          <ul>
            <li>
              <label htmlFor='name'>Name: </label>
              <input 
                type='text' 
                id='name' 
                required="required" 
                autoFocus 
                value={name} 
                onChange={ (event) => setName(event.target.value) } 
              />
            </li>
            <li>
              <label htmlFor='email'>Email: </label>
              <input 
                type="email" 
                id='email' 
                value={email} 
                onChange={ (event) => setEmail(event.target.value) } 
              />
            </li>
            <li>          
              <label htmlFor='tel'>Phone: </label>
              <input 
                type='tel' 
                id='tel' 
                value={phone} 
                onChange={ (event) => setPhone(event.target.value) } 
              />
            </li>
            <li>          
              <label htmlFor='url'>Website: </label>
              <input 
                type="url" 
                id='url' 
                value={website} 
                onChange={ (event) => setWebsite(event.target.value) } 
              />
            </li>
            <li>          
              <label htmlFor='about'>About: </label>
              <p>
                <textarea  
                  rows="4" cols="50" 
                  id='about' 
                  value={text} 
                  onChange={ (event) => setText(event.target.value) } 
                />
              </p>
            </li>
          </ul>

          <h2>Adress : </h2>

          <ul>
            <li>          
              <label htmlFor='street'>Street: </label>
              <input 
                type='text' 
                id='street' 
                value={street} 
                onChange={ (event) => setStreet(event.target.value) } 
              />
            </li>
            <li>
              <label htmlFor='city'>City: </label>
              <input 
                type='text' 
                id='city' 
                value={city} 
                onChange={ (event) => setCity(event.target.value) } 
              />
            </li>
            <li>
              <label htmlFor='zip'>Zip-code: </label>
              <input 
                type='text' 
                id='zip' 
                value={zipcode}
                onChange={ (event) => setZipcode(event.target.value) } 
              />
            </li>
            <li>
            <label htmlFor='country'>Country: </label>
            <input 
              type='text' 
              id='country' 
              value={country} 
              onChange={ (event) => 
              setCountry(event.target.value) } 
            />
            </li>
          </ul>
          <button 
            type="button" 
            onClick={handleButton}>
              Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddUsers