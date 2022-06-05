import { configureStore } from "@reduxjs/toolkit";
import dataStore from "./dataStore";
export default configureStore ({
    reducer : {data : dataStore},
})