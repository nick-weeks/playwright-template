import config from '../config'

/**
 * set any Cookies here. The below layout can be copied as many times as necessary.
 */
const COOKIES = [
  { 
    name: '1', //Cookie Name
    value: '1', //Cookie Value
    url: config.homeUrl, //The site URL set in the environment config file.
  },
]

export{COOKIES}
