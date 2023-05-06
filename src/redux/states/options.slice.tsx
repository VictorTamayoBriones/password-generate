import { createSlice } from "@reduxjs/toolkit";

export interface IOptionsState{
    inludeUpperCase: {
        is_selected: boolean,
        regex: string
    },
    includeLowerCase: {
        is_selected: boolean,
        regex: string
    },
    includeNumbers: {
        is_selected: boolean,
        regex: string
    },
    includeSynbols: {
        is_selected: boolean,
        regex: string
    }
}

const INITIAL_STATE: IOptionsState = {
    inludeUpperCase: {
        is_selected: false,
        regex: "[A-Z]"
    },
    includeLowerCase: {
        is_selected: false,
        regex: "[a-z]"
    },
    includeNumbers: {
        is_selected: false,
        regex: "[0-9]"
    },
    includeSynbols: {
        is_selected: false,
        regex: "[*!·.,´ç{`+[}&|]"
    }
}

export const optionsSlice = createSlice({
    name: 'optionSlice',
    initialState: INITIAL_STATE,
    reducers:{
        addOption: (state, action)=>{

            const option = action.payload
            const optionRegex = Object.entries(INITIAL_STATE).filter(entry => entry[0] === option).map(entry => entry[1].regex)[0]
            
            return {...state, [option]:{is_selected: true, regex: optionRegex}}
        },
        removeOption: (state, action)=>{
            const option = action.payload
            const optionRegex = Object.entries(INITIAL_STATE).filter(entry => entry[0] === option).map(entry => entry[1].regex)[0]

            return {...state, [option]:{is_selected: false, regex: optionRegex}}
        }
    }
})

export const { addOption, removeOption } = optionsSlice.actions
export default optionsSlice.reducer