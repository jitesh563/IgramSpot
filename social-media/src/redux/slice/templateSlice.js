import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectTemplate : 'template1'
}


const templateSlice = createSlice({
    name:'template',
    initialState,
    reducers : {
        selectTemplate : (state , action) =>{
            console.log("selectTemplate action called with payload:", action.payload);
            state.selectTemplate = action.payload
        }
    }

})

export const {selectTemplate} = templateSlice.actions;
export default templateSlice.reducer