import moment from 'moment'

const yearMonthDay = (date) => {
  return moment(date).format('YYYY-MM-DD')
}

module.exports = {
  yearMonthDay
}
