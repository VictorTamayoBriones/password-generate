import { configureStore } from "@reduxjs/toolkit";
import optionsSlice, { IOptionsState } from "./states/options.slice";
import lengthSlice, { ILengthState } from "./states/length.slice";
import alertSlice, { IAlert } from "./states/alert.slice";
import passwordGeneratedSlice, { IPasswordGeneratedState } from "./states/passwordGenerated.slice";


export interface AppStore{
    alert: IAlert,
    options: IOptionsState,
    length: ILengthState,
    passwordGenerated: IPasswordGeneratedState
}

export const store = configureStore<AppStore>({
    reducer:{
        alert: alertSlice,
        options: optionsSlice,
        length: lengthSlice,
        passwordGenerated: passwordGeneratedSlice
    }
})