import { useUserContext } from '../providers/UsersProfider';

import '../style/delete.css';

const Delete = () => {

  const { users, setUsers, displayUsers } = useUserContext();

  const restoreUser = ( id ) => {
    let tasksCopy = [ ...users ];  //kopia tablicy
    tasksCopy[id].active = true;
    setUsers(tasksCopy);
  };

  return (
      <div className='container'>
        <div className='delete'>
          {displayUsers.filter(user => user.active === false).map( user => (
            <p key={user.id}>
              Name: {user.name} 
              <button onClick={ () => restoreUser(user.id) }>
                Restore
              </button>
            </p>
          ))} 
        </div> 
      </div>
  )
}

export default Delete