import mongoose from "mongoose";
import User from "./user.model.js";
const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    message:{
     type:String,
    default: "",
     maxlength:1000,
     trim:true,
    },
      image: {
      type: String,
      default: "",
    },
    createdAt:{type:Date, default:Date.now},
},{
    timestamps:true,
})
const Message = mongoose.model("Message", messageSchema);
export default Message;