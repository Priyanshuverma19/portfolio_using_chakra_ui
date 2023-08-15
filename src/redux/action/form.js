import { server } from "../store";

import axios from "axios";

export const contact=(formdata)=> async dispatch=>{
    try {
       dispatch({type:"contactRequest"});

       const {data}= await axios.post(
        `${server}/contact`,
        formdata,{headers:{
        'content-type': 'multipart/form-data',
       },
    withCredentials: true,
    });
   
    dispatch({type:"contactSuccess",payload : data});
        
    } catch (error) {
        dispatch({type:"contactFail",payload : error.response.data.message});
        
    }
};