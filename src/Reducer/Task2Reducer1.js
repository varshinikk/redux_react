import * as ActionTypes from '../Actions/type1';

const initialState={
   num2: 1
};

export default(state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_B:
            return {...state,num2:state.num2+action.payloadNUM4};
        break;
        default:
            return state;
    }
}