import { createSlice } from "@reduxjs/toolkit";

export interface IAlert{
    isShowing: false
}

const INITIAL_STATE: IAlert ={
    isShowing: false
}

export const alertSlice = createSlice({
  name: 'isShowAlert',
  initialState: INITIAL_STATE,
  reducers:{
    showAlert: (state, action)=>{
        console.log(action.payload)
    }
  }  
})

export const { showAlert } = alertSlice.actions
export default alertSlice.reducer;
