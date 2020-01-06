import React, { useState } from 'react';
import { signIn } from '../utilities/forum-service';

const SignIn = ({ match, setUser, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notFound, setNotFound] = useState('hidden');
  const [wrongPw, setWrongPw] = useState('hidden');

  const handleSubmit = () => {
    signIn({ username, password })
      .then(data => {
        if (data.success) {
          setUser(data.user);
          // console.log(data);
          if (match.params.topic_id !== undefined) {
            history.push(`/topic/${match.params.topic_id}`);
          } else {
            history.push('/topics');
          }
        } else if (data.message === 'User not Found!') {
          // console.log(data);
          setNotFound('warn');
        } else if (data.message === 'Bad login!') {
          // console.log(data);
          setWrongPw('warn');
        }
      });
  }

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input className='form-control' type="text" placeholder="Username" onChange={e => { setUsername(e.target.value); setNotFound('hidden'); setWrongPw('hidden'); }} />
          <small className={`form-text ${notFound}`}>User not found</small>
        </div>
        <div className="form-group">
          <input className='form-control' type="password" placeholder="Password" onChange={e => { setPassword(e.target.value); setWrongPw('hidden'); }} />
          <small className={`form-text ${wrongPw}`}>Wrong password</small>
        </div>
        <input className='btn btn-warning' type="submit" value="Sign In" onClick={e => {
          e.preventDefault();
          handleSubmit();
        }} />
      </form>
    </div>
  );
}

export default SignIn;