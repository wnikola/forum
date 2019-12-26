const BASE_URL = 'https://coetus.herokuapp.com';
const API = '/api/forum';
const TOPICS = '/topics';
const USERS = '/users';
const MESSAGE = '/message';

const getTopics = () => {
  return fetch(`${BASE_URL}${API}${TOPICS}`)
    .then(res => res.json());
}

const signUp = (user) => {
  return fetch(`${BASE_URL}${API}${USERS}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'PUT',
    body: JSON.stringify(user)
  })
    .then(res => res.json());
}

const signIn = (user) => {
  return fetch(`${BASE_URL}${API}${USERS}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'POST',
    body: JSON.stringify(user)
  })
    .then(res => res.json());
}

const newTopic = (topic) => {
  return fetch(`${BASE_URL}${API}${TOPICS}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'PUT',
    body: JSON.stringify(topic)
  })
    .then(res => res.json());
}

const newMessage = (message) => {
  return fetch(`${BASE_URL}${API}${MESSAGE}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'PUT',
    body: JSON.stringify(message)
  })
    .then(res => res.json());
}

const getTopicMessages = (topic_id) => {
  return fetch(`${BASE_URL}${API}${MESSAGE}/${topic_id}`)
    .then(res => res.json());
}

const getUser = (user_id) => {
  return fetch(`${BASE_URL}${API}${USERS}/${user_id}`)
    .then(res => res.json());
}

export { getTopics, signUp, signIn, newTopic, newMessage, getTopicMessages, getUser };