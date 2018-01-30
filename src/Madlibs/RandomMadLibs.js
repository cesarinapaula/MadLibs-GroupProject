import React from "react";
import madlibsAPI from "./madlibsAPI";

class RandomMadLibs extends React.Component {
  constructor() {
    super();
    this.state = {
      noun: '',
      verb: '',
      adjective: ''
    };
  }

  getNoun = () => {
    let randomNoun = madlibsAPI.getRandomNoun();
    this.setState({
      noun: randomNoun
    })
    console.log(randomNoun)

  }

  getVerb = () => {
    let randomVerb = madlibsAPI.getRandomVerb();
    this.setState({
      verb: randomVerb
    })
    console.log(randomVerb)

  }

  getAdjective = () => {
    let randomAdj = madlibsAPI.getRandomAdj();
    this.setState({
      adjective: randomAdj
    })
    console.log(randomAdj)
  }

  clearButton = () => {
    this.setState({
      noun: '',
      verb: '',
      adjective: '',
    })
  }

  render() {
    const { noun, verb, adjective } = this.state;

    var listOfMadlibs = [`Mary wanted to go ${verb} a ${adjective} ${noun} today`, `Bob has a ${adjective} ${noun} that likes to ${verb} all the time`, `A ${adjective} ${noun} appeared yesterday and started to ${verb} right inside the house`]
    var randomNumber = Math.floor(Math.random() * listOfMadlibs.length);

    const message = noun.length > 0 && verb.length > 0 && adjective.length > 0 ? "MadLib: " + listOfMadlibs[randomNumber] : 'Your Random MadLib Will Appear Here.';

    const checkNoun = noun.length > 0 ? <i className="fa fa-check" aria-hidden="true"></i> : '';
    const checkVerb = verb.length > 0 ? <i className="fa fa-check" aria-hidden="true"></i> : '';
    const checkAdj = adjective.length > 0 ? <i className="fa fa-check" aria-hidden="true"></i> : '';

    return (
      <div>
        <h2>Random Madlibs!</h2>
        <h2>Instructions:</h2>
        <h3>To get a random Madlib, press each button once.  Your random MadLib will appear below, where indicated.</h3>
        <p>Click Here To Get A Noun {' '}<button onClick={this.getNoun}>Noun Button</button><span>{' '}{checkNoun}</span></p>
        <p>Click Here To Get A Verb {' '}<button onClick={this.getVerb}>Verb Button</button><span>{' '}{checkVerb}</span></p>
        <p>Click Here To Get An Adjective{' '}<button onClick={this.getAdjective}>Adjective Button</button><span>{' '}{checkAdj}</span></p>
        <p>Click Here To Clear All Fields And Restart{' '}<button onClick={this.clearButton}>Clear/Restart</button></p>
        {' '}
        <h2>{message}</h2>
      </div>
    )
  }
}


export default RandomMadLibs;


