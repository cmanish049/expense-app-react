import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({count}) => ({
    type: 'SET',
    count
});
const resetCount = () => ({type: 'RESET'});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {

        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            const count = typeof action.count === 'number' ? action.count : 0;
            return {
                count
            }
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});

store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch({ type: 'INCREMENT', incrementBy: 5 });

store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 101}));

// to unsubscribe the store use unsubscribe
// unsubscribe();


