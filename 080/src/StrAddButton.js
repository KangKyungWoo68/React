import React, {Component} from 'react';
import {add} from './actions'

class StrAddButton extends Component {
    addString = () => {
        this.props.store.dispatch(add());
    }
    
    render() {
        return (
            <input value='Add200' type="button" onClick={this.addString}/>
        )
    }

}

export default StrAddButton;