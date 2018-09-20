const BALANCE_TIMEOUT = parseInt(process.env.BALANCE_TIMEOUT, 10) || 60000
const POLL_BALANCE_EVERY = parseInt(process.env.POLL_BALANCE_EVERY, 10) || 100

module.exports = {
  BALANCE_TIMEOUT: BALANCE_TIMEOUT,
  POLL_BALANCE_EVERY: POLL_BALANCE_EVERY
}