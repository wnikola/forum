import React, { useState, useEffect } from 'react';
import { getUser } from '../utilities/forum-service';

const Profile = ({ match }) => {
  const [userID] = useState(match.params.user_id);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(userID)
      .then(data => {
        if (data.success) {
          setUser(data.user);
        } else {
          console.log(data);
        }
      })
  }, [userID])

  return (
    <div className='container'>
      <span><strong>Username: </strong>{user.username}</span>
      <br />
      <span><strong>First Name: </strong>{user.name}</span>
      <br />
      <span><strong>Last Name: </strong>{user.surname}</span>
    </div>
  )
}

export default Profile;