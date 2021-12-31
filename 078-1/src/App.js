import React, {Component} from 'react'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Start React 200!</h1>
                <span>{this.props.store.getState().str}</span><br/>
            </div>
        );
    }
}

export default App;