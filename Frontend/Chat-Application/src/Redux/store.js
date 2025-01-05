import {configureStore} from '@reduxjs/toolkit';
import AuthsliceReducer from './Authslice.js';
import MessageReducer from './MessageSlice.js'

export const store=configureStore({
    reducer:{
        Auth:AuthsliceReducer,
        Messages:MessageReducer
    }
});


