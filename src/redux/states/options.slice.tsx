import { createSlice } from "@reduxjs/toolkit";

export interface IOptionsState{
    inludeUpperCase: boolean,
    includeLowerCase: boolean,
    includeNumbers: boolean,
    includeSynbols: boolean
}

const INITIAL_STATE: IOptionsState = {
    inludeUpperCase: false,
    includeLowerCase: false,
    includeNumbers: false,
    includeSynbols: false
}

export const optionsSlice = createSlice({
    name: 'optionSlice',
    initialState: INITIAL_STATE,
    reducers:{
        addOption: (state, action)=>{

            const option = action.payload

            return {...state, [option]:true}
        },
        removeOption: (state, action)=>{
            const option = action.payload

            return {...state, [option]:true}
        }
    }
})

export const { addOption, removeOption } = optionsSlice.actions
export default optionsSlice.reducer