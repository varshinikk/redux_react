import * as ActionTypes from './type1';
export function onUpdateA(num3){
    return function (dispatch){
        dispatch({
            type: 'UPDATE_A',payloadNUM3:num3
        });
    }
}

export function onUpdateB(num4){
    return function (dispatch){
        dispatch({
            type: 'UPDATE_B',payloadNUM4:num4
        });
    }
}

export function onUpdateC(num1){
    return function (dispatch){
        dispatch({
            type: 'UPDATE_C',payloadNUM1:num1
        });
    }
}

export function onUpdateD(num2){
    return function (dispatch){
        dispatch({
            type: 'UPDATE_D',payloadNUM2:num2
        });
    }
}