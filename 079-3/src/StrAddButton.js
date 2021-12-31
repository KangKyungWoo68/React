import React, {Component} from 'react';

class StrAddButton extends Component {
  addString = () => {
    this.props.store.dispatch({ type: "ADD" });
  };

  render() {
    return <input value="Add200" type="button" onClick={this.addString} />;
  }
}

export default StrAddButton;