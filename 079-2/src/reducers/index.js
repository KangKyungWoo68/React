const initState = {
    str: 'react',
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                str: state.str + '200'
            };
        default:
            return state;
    }
};

export default reducer;