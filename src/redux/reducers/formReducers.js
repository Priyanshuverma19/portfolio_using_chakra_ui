import {createReducer} from "@reduxjs/toolkit";

export const  formReducer = createReducer({},{

    contactRequest:(state)=>{
        state.loading = true;
    },
    contactSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user= action.payload.user;
        state.message= action.payload.message;
    },
    contactFail:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error= action.payload;
       

        
    },
    clearError:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message= null;
    }
})