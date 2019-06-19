const initialState ={
    age:5
};

const reducer = (state=initialState, action1) =>{
    const newState = {...state};

    switch(action1.type){
        case 'AGE_UP' :
            newState.age += action1.value;
            break;

        case 'AGE_DOWN' :
            if(newState.age>0)
            {
                newState.age -= action1.value;
            }
            break;
    }
    return newState;
};
export default reducer;