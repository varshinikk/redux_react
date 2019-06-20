import * as ActionTypes from '../Actions/type1';

const initialState={
   num4: 1
};

export default(state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.UPDATE_D:
            return {...state,num4:state.num4+action.payloadNUM2};
        break;
        default:
            return state;
    }
}