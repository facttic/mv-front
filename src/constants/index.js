const {
  REACT_APP_INITIAL_AMOUNT: _initialAmount,
  REACT_APP_PER_PAGE: _perPage,
} = process.env

export default {
  initialAmount: _initialAmount || 24,
  perPage: _perPage || 480,
}
