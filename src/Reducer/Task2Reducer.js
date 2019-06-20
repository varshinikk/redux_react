import * as ActionTypes from '../Actions/type1';

const initialState={
   num1:1
};

export default(state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_A:
            return {...state,num1:state.num1+action.payloadNUM3};
        break;
        default:
            return state;
    }
}