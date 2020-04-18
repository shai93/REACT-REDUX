const initialState = {
    age:25
}


const Age = (state=initialState, action)=>{
    const newState = {...state};

    switch(action.type){
        case "AGE_UP":
            newState.age++;
            break;
        case "AGE_DOWN":
            newState.age--;
            break;
    }

    return newState;

}


export default Age



// store = reducer
// reducer = state and action
// action = type

// state change make sure to create a copy of state