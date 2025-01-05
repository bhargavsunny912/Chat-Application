import {createSlice} from '@reduxjs/toolkit';

export const Messageslice=createSlice({
    name:"Messages",
    initialState:{
        msg:[]
    },
    reducers:{
        setmessages:(state,action)=>{
            state.msg=action.payload
        }
    }

});

export const {setmessages}=Messageslice.actions;

export default Messageslice.reducer;