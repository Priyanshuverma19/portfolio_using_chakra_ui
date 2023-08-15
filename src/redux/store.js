import {configureStore} from "@reduxjs/toolkit"
import { formReducer } from "./reducers/formReducers";

const store= configureStore({
    reducer:{
 form:formReducer,
    },
})

export default store;
export const server="https://portfolio-back-pw82.vercel.app/api/v"