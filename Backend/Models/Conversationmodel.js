import mongoose, { mongo } from "mongoose";

const Conversationmodel=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    Messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
    }]
},{timestamps:true});

export const Conversation=mongoose.model('Conversation',Conversationmodel);