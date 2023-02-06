export const initialState = {
    cart: []
}

export const ActionTypes = {
    add_to_cart: "add_to_cart"
}

const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case "add_to_cart":
        return {
            ...state,
            cart: [...state.cart, action.item],
        };
        default: return state;
    }
}

export default reducer