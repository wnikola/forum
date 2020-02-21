import React, { useState, useEffect, useContext } from 'react';
import { getTopics } from '../utilities/forum-service';
import { withRouter } from 'react-router-dom';
import NewTopic from './NewTopic';
import { UserContext } from '../services/UserContext';

const Topics = ({ history }) => {
  const [user] = useContext(UserContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then(data => setTopics(data.topics));
  }, [])

  const refreshTopics = () => {
    getTopics()
      .then(data => setTopics(data.topics));
  }

  return (
    <>
      <div className='topics container'>
        <h3>Topics:</h3>
        {topics.map(topic => {
          if (typeof topic.title == 'string') {
            return (
              <p className='topic-title clickable' key={topic.topic_id} onClick={() => history.push(`/topic/${topic.topic_id}`)}>{topic.title}</p>
            )
          } else {
            return <></>
          }
        })}
      </div>
      {
        user ? <NewTopic refreshTopics={refreshTopics} /> : <></>
      }
    </>
  )
}

export default withRouter(Topics);