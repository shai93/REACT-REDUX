const cakeReducer = (state, action)=>{

    switch(action.type){
        case "BLACKFOREST":
            state = state+action.payload
            break;
        case "FRUIT":
            break;
    }
    return state;
}

export default cakeReducer
