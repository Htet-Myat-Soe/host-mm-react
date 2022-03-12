import { ActionTypes } from "../contants/action-types"

const initialState = {
    items : [],
    item : {},
    loading : true
}

export const itemReducer = (state = initialState, {type , payload}) => {
    switch(type){
        case ActionTypes.FETCH_ITEMS :
            return {...state, items : payload,loading : false}
        case ActionTypes.SELECTED_ITEM :
            return {...state, item : payload,loading : false}
        default :
            return state;
    }
}