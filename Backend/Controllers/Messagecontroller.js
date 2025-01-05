import { Conversation } from '../Models/Conversationmodel.js';
import { Message } from '../Models/Messagemodel.js';

export const sendMessage=async(req,res)=>{
    try{
        const senderId=req.id;
        const recieverId=req.params.id;
        const {message}=req.body;

        if(!message) {
            console.log('nooo');
        }

        let getConversation=await Conversation.findOne({
            participants:{$all:[senderId,recieverId]},
        });

        if(!getConversation){
            getConversation=await Conversation.create({
                participants:[senderId,recieverId]
            })
        }

        let newMessage=await Message.create({
            senderId,
            recieverId,
            message
        });

        await newMessage.save();

        if(newMessage){
            getConversation.Messages.push(newMessage.id);
        }
        await getConversation.save();


        return res.status(200).json({newMessage});
    }
    catch(e){
        console.log(e);
    }
}

export const getMessage=async(req,res)=>{
    try{
        const recieverId=req.params.id;
        const senderId=req.id;

        let getconversation2=await Conversation.findOne({
            participants:{$all:[senderId,recieverId]}
        }).populate("Messages");

        // res.status(200).json({message:"Message recieved seccessfully"})
        return res.status(200).json(getconversation2?.Messages);
    }
    catch(e){
        console.log(e);
    }
}