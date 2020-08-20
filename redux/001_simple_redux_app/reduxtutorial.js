const { createStore } = require("redux");

const initialState = {
    balance: 10000
};

const reducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "WITHDRAW":
            newState.balance = newState.balance - action.value;
            break;
        case "DEPOSIT":
            newState.balance = newState.balance + action.value;
            break;
        default:
    }
    return newState;
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Updated Balance: " + store.getState().balance);
})

store.dispatch({
    type: "WITHDRAW",
    value: 1000
});
store.dispatch({
    type: "DEPOSIT",
    value: 5000
});