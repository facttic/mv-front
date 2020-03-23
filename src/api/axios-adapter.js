import { UserTypes } from '../constants'

export default (client, options = {}) => {
  return (type, params) => {
    const {
      AUTH_LOGIN_REQUEST,
      AUTH_LOGOUT_REQUEST,
      AUTH_CHECK_REQUEST,
      USERS_BAN_REQUEST,
      USERS_DELETE_TWEET_REQUEST,
    } = UserTypes

    const {
      authFields,
      authUrl,
      tokenField,
      tokenStorageKey,
      userField,
      userStorageKey,
    } = Object.assign({
      authFields: { username: 'username', password: 'password' },
      tokenField: 'token',
      tokenStorageKey: 'token',
      userField: 'user',
      userStorageKey: 'user',
    }, options);

    switch (type) {
      /**
       * Auth network resources
       */
      case AUTH_LOGIN_REQUEST:
        return new Promise((resolve, reject) => {
          const headers = {
            'Content-Type': 'application/json',
          }
          const data = {
            [authFields.username]: params.username,
            [authFields.password]: params.password
          }

          const method = 'post'
          const url = `${authUrl}/users/login`
          client({ url, headers, data, method })
            .then(response => {
              const { data } = response
              const { [tokenField]: token, [userField]: user } = data
              localStorage.setItem(tokenStorageKey, token)
              localStorage.setItem(userStorageKey, JSON.stringify(user))
              client.defaults.headers.common['Authorization'] = token
              console.log(user)
              resolve(user)
            })
            .catch(error => {
              localStorage.removeItem(tokenStorageKey)
              reject(error)
            })
        })

      case AUTH_LOGOUT_REQUEST:
        return new Promise(resolve => {
          const token = localStorage.getItem(tokenStorageKey)
          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            token,
          }
          const method = 'post'
          const url = `${authUrl}/users/me/logout`
          client({ url, headers, method })
            .then(() => {
              localStorage.removeItem(tokenStorageKey)
              localStorage.removeItem(userStorageKey)
              delete client.defaults.headers.common['Authorization']
            })
          resolve()
        })
        
      case AUTH_CHECK_REQUEST:
        return new Promise((resolve, reject) => {
          const token = localStorage.getItem(tokenStorageKey)
          if (token) {
            const url = authUrl
            const headers = {
              'Content-Type': 'application/x-www-form-urlencoded',
              token,
            }
            const method = 'get'
            client({ url, headers, method })
              .then(response => {
                const { data } = response
                const { [userField]: user } = data
                resolve(user)
              })
              .catch(error => {
                reject(error)
              })
          } else {
            reject('Authentication failed.')
          }
        })

      /**
       * Other network resources. This could be moved elsewhere - @sgobotta
       */

      case USERS_BAN_REQUEST:
        return new Promise((resolve, reject) => {
          const token = localStorage.getItem(tokenStorageKey)
          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            token,
          }
          const method = 'post'
          const data = { tweetId: params.tweetId }
          const url = `${authUrl}/users/blacklist`
          client({ url, data, headers, method })
            .then(res => {
              resolve(res)
            })
            .catch(error => {
              reject(error)
            })
        })

      case USERS_DELETE_TWEET_REQUEST:
        return new Promise((resolve, reject) => {
          const token = localStorage.getItem(tokenStorageKey)
          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            token,
          }
          const method = 'delete'
          const _params = { tweetId: params.tweetId }
          const url = `${authUrl}/tweets`
          client({ url, params: _params, headers, method })
            .then(res => {
              resolve(res)
            })
            .catch(error => {
              reject(error)
            })
        })

      default:
        return Promise.reject(`Unsupported action type: ${type}`);
    }
  }
}