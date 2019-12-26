import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Start from '../components/Start';
import Topics from '../components/Topics';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import NewTopic from '../components/NewTopic';
import Topic from '../components/Topic';
import Profile from '../components/Profile';

const Content = ({ setUser, loggedIn, user }) => {
  if (loggedIn) {
    return (
      <main>
        <Switch>
          {/* <Route exact path="/" component={() => <Start />} /> */}
          <Route exact path="/" >
            <Topics />
            <NewTopic user={user} />
          </Route>
          <Route path="/topics" >
            <Topics />
            <NewTopic user={user} />
          </Route>
          <Route path="/topic/:topic_id" component={(props) => <Topic user={user} {...props} />} />
          <Route path="/profile/:user_id" component={(props) => <Profile {...props} />} />
          <Route path="/signin" component={(props) => <SignIn setUser={setUser} {...props} />} />
          <Route path="/signup" component={(props) => <SignUp setUser={setUser} {...props} />} />
        </Switch>
      </main>
    );
  } else {
    return (
      <main>
        <Switch>
          {/* <Route exact path="/" component={() => <Start />} /> */}
          <Route exact path="/" component={Topics} />
          <Route path="/topics" component={Topics} />
          <Route path="/topic/:topic_id" component={(props) => <SignIn setUser={setUser} {...props} />} />
          <Route path="/profile/:user_id" component={(props) => <Profile {...props} />} />
          <Route path="/signin" component={(props) => <SignIn setUser={setUser} {...props} />} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </main>
    )
  }

}

export default Content;