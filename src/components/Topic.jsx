import React, { useState, useEffect, useContext } from 'react';
import { getTopicMessages, newMessage, getTopics } from '../utilities/forum-service';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../services/UserContext';

const Topic = ({ match, history }) => {
  const [user] = useContext(UserContext);
  const [topicID] = useState(match.params.topic_id);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState({});

  function handleSubmit() {
    newMessage({ username: user.username, topic_id: topicID, message })
      .then(data => {
        getTopicMessages(topicID)
          .then(data => setMessages(data.messages));
        setMessage('');
      });
  }

  useEffect(() => {
    getTopicMessages(topicID)
      .then(data => {
        if (data.success) {
          setMessages(data.messages);
          // console.log(data)
        } else {
          console.log(data);
        }
      });
  }, [topicID]);

  useEffect(() => {
    getTopics()
      .then(data => setTopic(data.topics.find(topic => topic.topic_id === topicID)));
  }, [topicID]);

  return (
    <>
      {/* title */}
      <div className='container'>
        <h3>{topic.title}</h3>
        <span>{new Date(topic.timestamp).toLocaleString()}</span>
      </div>
      {/* messages */}
      {messages.map(message => {
        if (typeof message.message == 'string') {
          return (
            <div className='container' key={message.message_id}>
              <span className='clickable' onClick={() => history.push(`/profile/${message.user_id}`)}><strong>{message.username}</strong>, </span>
              <span>{new Date(message.timestamp).toLocaleString()}:</span>
              <p>{message.message}</p>
            </div>)
        } else {
          return <></>
        }
      })}
      {/* new message form */}
      <div className='container new-message'>
        <form>
          <div className="form-group">
            <textarea className='form-control' cols="30" rows="10" value={message} placeholder="Message" onChange={e => setMessage(e.target.value)}></textarea>
          </div>
          <input className='btn btn-warning' type="submit" value='Submit' onClick={e => {
            e.preventDefault();
            handleSubmit();
          }} />
        </form>
      </div>
    </>
  );
}

export default withRouter(Topic);