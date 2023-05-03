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
    handleAlert: (state, action)=>{
      state.isShowing = action.payload
    },
  }  
})

export const { handleAlert } = alertSlice.actions
export default alertSlice.reducer;
