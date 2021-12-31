import React, {Component} from 'react'

class App extends Component {
  btClick = () => this.props.store.dispatch({ type: "ADD" });
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().str}</span>
        <br />
        <input value="Add200" type="button" onClick={this.btClick} />
      </div>
    );
  }
}

export default App;