import React, { useState } from 'react';
import { signIn } from '../utilities/forum-service';

const SignIn = ({ match, setUser, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        }
        // data.success ? history.push('/topics') : console.log(data, 'Nije ulogovan');
        // data.success ? console.log(data, 'Ulogovan') : console.log(data, 'Nije ulogovan');
      });
  }
  // console.log(match.params.topic_id)
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input className='form-control' type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <input className='form-control' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
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