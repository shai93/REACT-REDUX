const initialState = {
    age:25,
    history:[]
}


const Age = (state=initialState, action)=>{
    const newState = {...state};

    switch(action.type){
        case "AGE_UP":
            return {
                ...state,
                age:state.age+action.value,
                history:state.history.concat({id:Math.random() , age:state.age+action.value})
            }
            break;
        case "AGE_DOWN":
            return {
                ...state,
                age:state.age-action.value,
                history:state.history.concat({id:Math.random(), age:state.age-action.value})
            }
            break;
        case "REMOVE":
        return {
                ...state,
                history:state.history.filter((ele)=>{
                    return ele.id != action.key
                })
            }
    }

    return newState;

}


export default Age



// store = reducer
// reducer = state and action
// action = type

// state change make sure to create a copy of state