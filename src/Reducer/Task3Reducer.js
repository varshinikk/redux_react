import * as ActionTypes from '../Actions/type';

const intialState = {
    name:'',
    password:'',
    message:''
};

export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.CLICK:{
            return{...state,message:'Login Successfully'}
    }

        default:
            return state;
    }
}