import * as ActionTypes from '../Actions/type';

const intialState = {
    name:'',
    age:'',
    city:'',
    address:''
};

export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.CLICK:{
            return{...state}
    }

        default:
            return state;
    }
}