import { useNavigate } from 'react-router-dom';

import { useUserContext } from '../providers/UsersProfider';

import '../style/home.css';

const Home = () => {

  const { users, setUsers, displayUsers } = useUserContext();
  const navigate = useNavigate();

  const deleteUser = ( id ) => {
    let tasksCopy = [ ...users ];  //kopia tablicy
    tasksCopy[id].active = false;
    setUsers(tasksCopy);
  };

  return (
    <main>
      <div className='container'>
        {displayUsers.filter( user => user.active === true).map( user => (
          <ul key={user.id}>
            <li>
              Name: 
              <p>{user.name}</p>
            </li>
            <li>
              Email: 
              <p><a href='email:#'>{user.email}</a></p>
            </li>
            <li>
              Phone: 
              <p><a href='tel:#'>{user.phone}</a></p>
            </li>
            <li>
              <div className='main-button'>
                <button onClick={ () => navigate( {pathname: `./update/${user.id}`}) }>More / Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </main>
  )
}

export default Home