const {
  REACT_APP_INITIAL_AMOUNT: _initialAmount,
  REACT_APP_PER_PAGE: _perPage,
} = process.env

export default {
  initialAmount: _initialAmount || 24,
  perPage: _perPage || 480,
}

export const UserTypes = {
  AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
  AUTH_LOGOUT_REQUEST: 'AUTH_LOGOUT_REQUEST',
  AUTH_CHECK_REQUEST: 'AUTH_CHECK_REQUEST',
  USERS_ADD_TO_BLACKLIST_REQUEST: 'USERS_ADD_TO_BLACKLIST_REQUEST'
}
