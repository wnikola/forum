import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Start from '../components/Start';
import Topics from '../components/Topics';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Topic from '../components/Topic';
import Profile from '../components/Profile';
import { UserContext } from '../services/UserContext';

const Content = () => {
  const [user] = useContext(UserContext);

  if (user) {
    return (
      <main>
        <Switch>
          {/* <Route exact path="/" component={() => <Start />} /> */}
          <Route exact path="/" component={() => <Topics />} />
          <Route path="/topics" component={() => <Topics />} />
          <Route path="/topic/:topic_id" component={(props) => <Topic {...props} />} />
          <Route path="/profile/:user_id" component={(props) => <Profile {...props} />} />
          <Route path="/signin" component={(props) => <SignIn {...props} />} />
          <Route path="/signup" component={(props) => <SignUp {...props} />} />
        </Switch>
      </main>
    );
  } else {
    return (
      <main>
        <Switch>
          {/* <Route exact path="/" component={() => <Start />} /> */}
          <Route exact path="/" component={() => <Topics />} />
          <Route path="/topics" component={() => <Topics />} />
          <Route path="/topic/:topic_id" component={(props) => <SignIn {...props} />} />
          <Route path="/profile/:user_id" component={(props) => <SignIn {...props} />} />
          <Route path="/signin" component={(props) => <SignIn {...props} />} />
          <Route path="/signup" component={(props) => <SignUp {...props} />} />
        </Switch>
      </main>
    )
  }

}

export default Content;