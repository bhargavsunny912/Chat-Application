import {createSlice} from '@reduxjs/toolkit';

export const Authslice=createSlice({
    name:'Auth',
    initialState:{
        authuser:null,
        otherusers:null,
        selecteduser:null
    },
    reducers:{
        setAuthuser:(state,action)=>{
            state.authuser=action.payload
        },
        setOtherusers:(state,action)=>{
            state.otherusers=action.payload
        },
        setSelecteduser:(state,action)=>{
            state.selecteduser=action.payload;
        }
    }
});

export const {setAuthuser ,setOtherusers,setSelecteduser}=Authslice.actions;

export default Authslice.reducer;