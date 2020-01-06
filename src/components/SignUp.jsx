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
  const [isSameWarn, setIsSameWarn] = useState('hidden');
  const [pwHelp, setPwHelp] = useState('text-muted');
  const [isFilled, setIsFilled] = useState('hidden');
  const [usernameTaken, setUsernameTaken] = useState('hidden');

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
    if (!fName || !lName || !username || !email) {
      setIsFilled('warn');
      return;
    } else if (!validPw) {
      setPwHelp('warn');
      return;
    } else if (!isSame) {
      setIsSameWarn('visible');
      return;
    }

    signUp({ name: fName, surname: lName, username, email, password })
      .then(data => {
        if (data.success) {
          // console.log(data.user)
          // console.log(data)
          setUser(data.user);
          history.push('/topics');
        } else if (data.message === 'User already exists!') {
          // console.log(data);
          setUsernameTaken('warn');
        }
      });
  }

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input className='form-control' type="text" placeholder="First Name" onChange={e => { setFName(e.target.value); setIsFilled('hidden'); }} />
        </div>
        <div className="form-group">
          <input className='form-control' type="text" placeholder="Last Name" onChange={e => { setLName(e.target.value); setIsFilled('hidden'); }} />
        </div>
        <div className="form-group">
          <input className='form-control' type="text" placeholder="Username" onChange={e => { setUsername(e.target.value); setIsFilled('hidden'); setUsernameTaken('hidden'); }} />
          <small className={`form-text ${usernameTaken}`}>Username already taken</small>
        </div>
        <div className="form-group">
          <input className='form-control' type="email" placeholder="Email" onChange={e => { setEmail(e.target.value); setIsFilled('hidden'); }} />
        </div>
        <div className="form-group">
          <input className='form-control' aria-describedby="passwordHelpBlock" type="password" placeholder="Password" onChange={e => { setPassword(e.target.value); setPwHelp('text-muted'); }} />
          <small id="passwordHelpBlock" className={`form-text ${pwHelp}`}>Password must be at least 8 characters long, and contain letters and numbers</small>
        </div>
        <div className="form-group">
          <input className='form-control' type="password" placeholder="Confirm Password" onChange={e => { setPwConfirm(e.target.value); setIsSameWarn('hidden'); }} />
          <small id="pass-confirm" className={`form-text ${isSameWarn} warn`}>Passwords don't match</small>
        </div>
        <div className="form-group">
          <small className={`form-text ${isFilled}`}>Please fill out all the fields</small>
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