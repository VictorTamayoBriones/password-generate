import { configureStore } from "@reduxjs/toolkit";
import {IAlert, alertSlice} from "./states/Alert.slice";

export interface AppStore{
    alert: IAlert
}

export const store = configureStore<AppStore>({
    reducer:{
        alert: alertSlice.reducer
    }
})