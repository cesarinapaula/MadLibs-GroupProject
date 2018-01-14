import axios from 'axios';

const getAdjective = () => axios.get("http://15.codyhess.com:9998/adj");
const getNoun = () => axios.get("http://15.codyhess.com:9998/noun");
const getVerb = () => axios.get("http://15.codyhess.com:9998/verb");
const getName = () => axios.get("http://15.codyhess.com:9998/name");

export default {
  getAdjective,
  getNoun,
  getVerb,
  getName
}