import React from "react";
import { Route, Switch } from "react-router-dom";

class userMad extends React.Component {
  constructor() {
    super();
    this.state = {
      noun: "",
      verb: "",
      adj: ""
    };
  }

  renderForm = () => {
    const { noun, verb, adj } = this.state;
    return (
      <div>
        <br />
        <div>
          <input
            type="text"
            placeholder="enter a noun"
            id="noun"
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div>
          <input
            id="verb"
            type="text"
            placeholder="enter a verb"
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div>
          <input
            id="adj"
            type="text"
            placeholder="enter an adjective"
            onChange={this.handleChange}
          />
        </div>
        <br />
        <button
          disabled={!(this.state.noun && this.state.verb && this.state.adj)}
          onClick={this.handleSubmit}
        >
          {" "}
          Submit{" "}
        </button>
        <p>
          {" "}
          Noun:{noun} Verb: {verb} Adj: {adj}{" "}
        </p>
      </div>
    );
  };

  renderMadLib = () => {
    console.log("Render Mad Lib");
    const{noun, verb, adj} = this.state
    return (
      <div>
        <h4>Your Mad Lib</h4>
        <p>
          Mary went to the {noun} to get some {noun}. On the way, she {verb}ed a{" "}
          {adj} {noun}
        </p>
      </div>
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adj = document.getElementById("adj").value;
    this.setState({
      noun: noun,
      verb: verb,
      adj: adj
    });
    console.log(noun + verb + adj);
    //this.renderMadLib(noun, verb, adj);
    this.props.history.push("/create/lib");
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/create" render={this.renderForm} />
          <Route path="/create/lib" render={this.renderMadLib} />
        </Switch>
      </div>
    );
  }
}

export default userMad;
