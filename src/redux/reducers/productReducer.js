
import { ActionTypes } from "../contants/action-type";


const initialState ={
    products:[
        {
            id:1,
            title:"Anu",
            category:"Developder"
        }
    ],
}
export const productReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            
            return state;
    
        default:
            return state;
    }

}