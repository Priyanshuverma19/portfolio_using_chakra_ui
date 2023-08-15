import {BACKEND_URL} from "./helper.js"
import { commonrequest } from "./apiCall.js"

export const contact = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/contact`,data)
}