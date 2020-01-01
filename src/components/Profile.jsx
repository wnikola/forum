import React, { useState, useEffect } from 'react';
import { getUser, getTopics } from '../utilities/forum-service';

const Profile = ({ match, history }) => {
  const [userID] = useState(match.params.user_id);
  const [user, setUser] = useState({});
  const [userTopics, setUserTopics] = useState([]);

  useEffect(() => {
    getUser(userID)
      .then(data => {
        if (data.success) {
          setUser(data.user);
        } else {
          console.log(data);
        }
      });

    getTopics()
      .then(data => {
        if (data.success) {
          setUserTopics(data.topics.filter(topic => topic.user_id === userID));
          // console.log(userTopics);
        } else {
          console.log(data);
        }
      });
  }, [userID]);

  return (
    <div className='container'>
      <img src={user.picture ? user.picture : 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'} alt="user img" style={{ width: '150px' }} />
      <br />
      <span><strong>Username: </strong>{user.username}</span>
      <br />
      <span><strong>First Name: </strong>{user.name}</span>
      <br />
      <span><strong>Last Name: </strong>{user.surname}</span>
      <h4>{user.username}'s topics:</h4>
      {userTopics.slice(0, 10).map(topic => {
        if (typeof topic.title == 'string') {
          return (
            <p className='topic-title clickable' key={topic.topic_id} onClick={() => history.push(`/topic/${topic.topic_id}`)}>{topic.title}</p>
          )
        } else {
          return <></>
        }
      })}
    </div>
  )
}

export default Profile;