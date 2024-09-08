import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data : null ,
    dataType : null ,
}


const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {
        setPostData : (state , action) => {
            state.data = action.payload
            
        },
        clearPostData : (state , action) =>{
            state.data = null

        },
        dataType : (state , action) => {
            state.dataType = action.payload
        } 
    }
})

export const {setPostData,clearPostData , dataType} = postSlice.actions;
export default postSlice.reducer