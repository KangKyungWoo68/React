import {ADD} from '../actions'
import {combineReducers} from 'redux'

const initState = {
    str: 'react',
};

const addReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return state, {
                str: state.str + '200'
            };
        default:
            return state;
    }
};

const reducers = combineReducers({
  data: addReducer,
});

export default reducers;