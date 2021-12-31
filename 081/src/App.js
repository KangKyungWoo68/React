import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        {/* <span>{this.props.store.getState().data.str}</span><br/> */}
        <span>{this.props.str}</span>
        <br />
        {/* <StrAddButton store={this.props.store}/> */}
        <input value="Add200" type="button" onClick={this.props.addString} />
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
    console.log('Props from indes.js : ' + props.indexProp)
    return {
        str: state.data.str,
    };
};

let mapDispatchToProps = (dispatch, props) => {
  console.log("Props from App.js : " + props.AppProp);
  return {
    addString: () => dispatch({ type: "ADD" }),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;