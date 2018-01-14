import axios from 'axios';

const getAdjective = () => axios.get("http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");

const getNoun = () => axios.get("http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");

const getVerb = () => axios.get("http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=verb&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");

export default {
  getAdjective,
  getNoun,
  getVerb
}