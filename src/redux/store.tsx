import { configureStore } from "@reduxjs/toolkit";
import alertSlice, {IAlert} from "./states/Alert.slice";
import optionsSlice, { IOptionsState } from "./states/options.slice";

export interface AppStore{
    alert: IAlert,
    options: IOptionsState
}

export const store = configureStore<AppStore>({
    reducer:{
        alert: alertSlice,
        options: optionsSlice
    }
})