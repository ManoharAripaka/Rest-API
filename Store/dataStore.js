import { createSlice } from "@reduxjs/toolkit";
const dataStore = createSlice({
    name: "dataStore",
    initialState: {
        show: "none",
        userId: "",
        firstName: "",
        lastName: "",
        ApiData: [],
        run: "run",
        edit: false
    },
    reducers : {
        updateshow : (state,action) => {state.show = action.payload},
        updateuserId : (state,action) => {state.userId = action.payload},
        updatefirstName : (state,action) => {state.firstName = action.payload},
        updatelastName : (state,action) => {state.lastName = action.payload},
        updateApiData : (state,action) => {state.ApiData = action.payload},
        updaterun : (state,action) => {state.run = action.payload},
        updateedit : (state,action) => {state.edit = action.payload}
    }
})
export const {updateshow,updateuserId,updatefirstName,updatelastName,updateApiData,updaterun,updateedit} = dataStore.actions
export default dataStore.reducer