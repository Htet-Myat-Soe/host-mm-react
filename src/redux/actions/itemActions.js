import { itemApi } from "../../api/itemApi"
import { ActionTypes } from "../contants/action-types";


export const fetchItems = () => async (dispatch) => {
    const response = await itemApi.get('/items');

    dispatch({
        type : ActionTypes.FETCH_ITEMS,
        payload : response.data.data
    });
}

export const selectedItem = (id) => async (dispatch) => {
    const response = await itemApi.get('/items/'+id);

    dispatch({
        type : ActionTypes.SELECTED_ITEM,
        payload : response.data.data
    });
}