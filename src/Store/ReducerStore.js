const initialState={
    num1:1,
    num2:1,
    num3:1,
    num4:1
};
const reduce = (state=initialState,action1)=>{
    debugger
    const newState={...state};
    switch(action1.type)
    {
        case 'UPDATE_A':
            newState.num1+=newState.num3;
        break;
        case 'UPDATE_B':
            newState.num2+=newState.num4;
        break;
        case 'UPDATE_C':
            newState.num3+=newState.num1;
        break;
        case 'UPDATE_D':
            newState.num4+=newState.num2;
        break;
    }
    return newState;
}
export default reduce;