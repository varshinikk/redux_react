import * as ActionTypes from '../Actions/type1';

const initialState={
   num3: 1
};

export default(state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_C:
            return {...state,num3:state.num3+action.payloadNUM1};
        break;
        default:
            return state;
    }
}