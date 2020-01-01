import React, { useState, useEffect } from 'react';
import { signUp } from '../utilities/forum-service';

const SignUp = ({ setUser, history }) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwConfirm, setPwConfirm] = useState('')
  const [validPw, setValidPw] = useState(false)
  const [isSame, setIsSame] = useState(false)

  useEffect(() => {
    function isValidPw() {
      if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)) {
        setValidPw(true)
      }
      else {
        setValidPw(false)
      }
    }
    isValidPw()
  }, [password])

  useEffect(() => {
    setIsSame(pwConfirm === password)
  }, [pwConfirm, password])

  const handleSubmit = () => {
    if (!validPw || !isSame) {
      return;
    }
    signUp({ name: fName, surname: lName, username, email, password })
      .then(data => {
        if (data.success) {
          // console.log(data.user)
          setUser(data.user);
          history.push('/topics');
        }
      });
  }

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input className='form-control' type="text" placeholder="First Name" onChange={e => setFName(e.target.value)} />
        </div>
        <div className="form-group">
          <input className='form-control' type="text" placeholder="Last Name" onChange={e => { setLName(e.target.value) }} />
          <div className="form-group">
          </div>
          <input className='form-control' type="text" placeholder="Username" onChange={e => { setUsername(e.target.value) }} />
          <div className="form-group">
          </div>
          <input className='form-control' type="text" placeholder="Email" onChange={e => { setEmail(e.target.value) }} />
        </div>
        <div className="form-group">
          <input className='form-control' type="password" placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
        </div>
        <div className="form-group">
          <input className='form-control' type="password" placeholder="Confirm Password" onChange={e => setPwConfirm(e.target.value)} />
        </div>
        <input className='btn btn-warning' type="submit" value="Sign Up" onClick={e => {
          e.preventDefault();
          handleSubmit();
        }} />
      </form>
    </div>
  );
}

export default SignUp;