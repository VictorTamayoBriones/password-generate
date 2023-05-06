import { createSlice } from "@reduxjs/toolkit";

export interface ILengthState{
    lengthValue: string
}

const INITIAL_STATE: ILengthState = {
    lengthValue: '0'
}

export const lengthSlice = createSlice({
    name: 'lengthSlice',
    initialState: INITIAL_STATE,
    reducers:{
        handleLength: (state, action) => {
            state.lengthValue = action.payload
        }
    }
})

export const { handleLength } = lengthSlice.actions;
export default lengthSlice.reducer;