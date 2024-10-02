import config from '../config'

const COOKIES = [
  { 
    name: 'RSCOMPONENTS_ENSIGHTEN_PRIVACY_Advertising',
    value: '1',
    url: config.homeUrl,
  },
  { 
    name: 'RSCOMPONENTS_ENSIGHTEN_PRIVACY_Analytics',
    value: '1',
    url: config.homeUrl,
  },
  { 
    name: 'RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_LOADED',
    value: '1',
    url: config.homeUrl,
  },
  { 
    name: 'RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_VIEWED',
    value: '1',
    url: config.homeUrl,
  },
  { 
    name: 'RSCOMPONENTS_ENSIGHTEN_PRIVACY_Functionality',
    value: '1',
    url: config.homeUrl,
  },
  { 
    name: 'RSCOMPONENTS_ENSIGHTEN_PRIVACY_MODAL_VIEWED',
    value: '1',
    url: config.homeUrl,
  },
  { 
    name: 'RSCOMPONENTS_ENSIGHTEN_PRIVACY_Recommendations_and_Testing',
    value: '1',
    url: config.homeUrl,
  },
  {
    name: 'locale',
    value: config.locale,
    url: config.homeUrl,
  },
]

export{COOKIES}
