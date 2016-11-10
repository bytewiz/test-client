import React, { Component } from 'react';
import { getToken } from "./service/api"


export default class App extends Component {

  constructor(){
    super()

    this.state = {
      email: "",
      password: "",
      response: null
    }
  }

  _submit(e){
    e.preventDefault();
    getToken("/user/login")
    .then((response, fail) => {
      if(fail) {
        this.setState({response: "an error happend"})
      }
      console.log("res", response.body)
      this.setState({response: "you created a token! :-)"})
    })
  }
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        {this.state.response}
        <form onSubmit={this._submit}>
          <label>
            username
            <input type="text" onChange={(e) => this.setState({email: e.target.value})}/>
          </label>
          <label>
            password
            <input type="password" onChange={(e) => this.setState({password: e.target.value})}/>
          </label>
          <button type="submit">login</button>
        </form>
      </div>

    );
  }
}
