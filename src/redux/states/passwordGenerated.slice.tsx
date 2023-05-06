import { createSlice } from "@reduxjs/toolkit";

export interface IPasswordGeneratedState{
    passwordGenerated: string
}

const INITIAL_STATE: IPasswordGeneratedState = {
    passwordGenerated: ''
}

export const passwordGeneratedSlice  = createSlice({
    name: 'passwordGeneratedSlice',
    initialState: INITIAL_STATE,
    reducers:{
        handlePasswordGenerated: (state, action) =>{
            state.passwordGenerated = action.payload
        }
    }
})

export const { handlePasswordGenerated } = passwordGeneratedSlice.actions
export default passwordGeneratedSlice.reducer