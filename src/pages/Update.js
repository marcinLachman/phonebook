import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useUserContext } from '../providers/UsersProfider';

const Update = () => {

  const { users, setUsers, displayUsers } = useUserContext();
  const navigation = useNavigate()
  const { user } = useParams();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ website, setWebsite ] = useState('');
  const [ text, setText ] = useState('');

  const [ street, setStreet ] = useState('');
  const [ city, setCity ] = useState('');
  const [ zipcode, setZipcode ] = useState('');
  const [ country, setCountry ] = useState('');

  useEffect(() => {
    const userFilter = displayUsers.filter( filter => (filter.id).toString() === user );

    setName(userFilter.map( user => user.id));
    setName(userFilter.map( user => user.name));
    setEmail(userFilter.map( user => user.email));
    setPhone(userFilter.map( user => user.phone));
    setWebsite(userFilter.map( user => user.website));
    setText(userFilter.map( user => user.text));

    setStreet(userFilter.map( user => user.street));
    setCity(userFilter.map( user => user.city));
    setZipcode(userFilter.map( user => user.zipcode));
    setCountry(userFilter.map( user => user.country));
    
  }, []);

  const handleButton = () => {
    let tasksCopy = [ ...users ];  //kopia tablicy
    tasksCopy[user].name = name;
    tasksCopy[user].email = email;
    tasksCopy[user].phone = phone;
    tasksCopy[user].website = website;
    tasksCopy[user].text = text;
    tasksCopy[user].street = street;
    tasksCopy[user].city = city;
    tasksCopy[user].zipcode = zipcode;
    tasksCopy[user].country = country;
    setUsers(tasksCopy);
    navigation('/')
  };

  return (
    <div className='container'>
    <div className='addUsers'>
      <form onSubmit={ (event) => event.preventDefault() }>
      <h2>Information : </h2>
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

export default Update