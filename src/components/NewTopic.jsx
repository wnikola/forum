import React, { useState } from 'react';
import { newTopic, newMessage } from '../utilities/forum-service';

const NewTopic = ({ user: { username, user_id }, refreshTopics }) => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    newTopic({ user_id, title: topic })
      .then(data => {
        if (data.success) {
          newMessage({ username, topic_id: data.topic.topic_id, message });
          // .then(data => console.log(data));
          setTopic('');
          setMessage('');
          refreshTopics();
        } else {
          console.log(data);
        }
      });
  }

  return (
    <div className='container new-topic'>
      <h5>Start a new topic</h5>
      <form>
        <div className="form-group">
          {/* <label htmlFor="topic-title">Topic Title:</label> */}
          <input className='form-control' value={topic} type="text" id='topic-title' placeholder="Topic title" onChange={e => setTopic(e.target.value)} />
        </div>
        <div className="form-group">
          {/* <label htmlFor="f-message">Message:</label> */}
          <textarea className='form-control' value={message} id='f-message' cols="30" rows="10" placeholder="Message" onChange={e => setMessage(e.target.value)} ></textarea>
        </div>
        <input className='btn btn-warning' type="submit" value="Submit" onClick={e => {
          e.preventDefault();
          handleSubmit();
        }} />
      </form>
    </div>
  );
}

export default NewTopic;