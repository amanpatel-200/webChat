import mongoose, { Types } from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true

    },
    password:{
       type:String,
        required: true
    },
    
    image: {
    type: String,
 
  },
   bio:{
        type:String,
        default:"Hey! I'm using SafeTalk."
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})
const User = mongoose.model('User',UserSchema);
export default User;