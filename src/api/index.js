import axios from 'axios'
import createAxiosAdapter from './axios-adapter'
import { UserTypes } from '../constants'
const { REACT_APP_API_URL: API_URL } = process.env

export const providerOptions = {
  authFields: { username: 'email', password: 'password' },
  authUrl: API_URL,
  tokenStorageKey: 'marchavirtual.token',
  userStorageKey: 'marchavirtual.user',
  tokenField: 'token',
  userfield: 'user'
}

const provider = createAxiosAdapter(axios, providerOptions)

const {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGOUT_REQUEST,
  USERS_BAN_REQUEST,
  USERS_DELETE_TWEET_REQUEST
} = UserTypes

export default {
  users: {
    login: (username, password) => provider(AUTH_LOGIN_REQUEST, {
      username,
      password,
    }),
    logout: () => provider(AUTH_LOGOUT_REQUEST),
    banUser: userTwitterId => provider(USERS_BAN_REQUEST, {
      userTwitterId
    }),
    deleteTweet: tweetId => provider(USERS_DELETE_TWEET_REQUEST, {
      tweetId
    })
  }
}
