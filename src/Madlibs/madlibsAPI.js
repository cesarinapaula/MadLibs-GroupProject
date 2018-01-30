const verb = ["run", "dance", "walk", "call", "study", "bake", "play", "build", "cook", ""]
const noun = ["house", "cat", "chair", "table", "book", "building", "cake", "cookie", "candy"]
const adjective = ['blue', 'tall', 'small', 'heavy', "red", "pretty", "yellow", "little", ""]


const getRandomVerb = () => {
  let indexVerb = Math.floor(Math.random() * verb.length);
  return verb[indexVerb];
}

const getRandomNoun = () => {
  let indexNoun = Math.floor(Math.random() * noun.length);
  return noun[indexNoun];
}

const getRandomAdj = () => {
  let indexAdj = Math.floor(Math.random() * adjective.length);
  return adjective[indexAdj];
}

export default {
  getRandomVerb,
  getRandomNoun,
  getRandomAdj,

}
