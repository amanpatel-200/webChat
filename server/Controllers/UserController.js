import express from "express";
import User from "../Models/user.model.js";
import bcrypt from "bcryptjs"
import genToken from "../utils/genToken.js";
import streamifier from "streamifier";
import cloudinary from "../utils/cloudinary.js";
export const Signup = async(req,res)=>{
 try{ 
  let{name,email,password,bio} = req.body;
  const user = await User.findOne({email});
   if(user){
    return res.status(400).json({message:"Email Already exists"});
  }
  const hashPassword = await bcrypt.hash(password,10);
   let imageUrl = "";
  
  if (req.file) {
    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "chat-images",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
  
        streamifier
          .createReadStream(req.file.buffer)
          .pipe(stream);
      });
    };
  
    const result = await uploadToCloudinary();
  
    imageUrl = result.secure_url;
  }
  const newUser = await User.create({name,email,password:hashPassword,bio,profilePic:imageUrl}); 
  const token = await genToken(newUser._id);
  res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "lax",
        maxAge: 7*24*60*60*1000
       })
       return res.status(201).json({user:{_id:newUser._id,name:newUser.name, bio: newUser.bio,
    profilePic: newUser.profilePic,}, message : "Signup Successfully",success:true});
} catch(error){
 return res.status(500).json({message:`signup error ${error}`})
}
}
export const login = async (req,res)=>{
  try{
    let {email,password} = req.body;
   

    if(!email || !password){
      return res.status(400).json({message:"Something is missing",success:false})
    }
    const user  = await User.findOne({email});
    if(!user){
      return res.status(400).json({message:"User Not Exist",success:false});

    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({message:"Password is Incorrect",success:false});
    }
    const token = await genToken(user._id);
     res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "lax",
        maxAge: 7*24*60*60*1000
       })
        return res.status(201).json({message:`Welcome to SafeTalk`,user:{id:user._id,name:user.name,email:user.email},success:true});

  } catch (error){
    console.log(error);
   return res.status(500).json({message:"Server error"});
   
  }
}
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,        
      sameSite: "lax",    
    });

    return res.status(200).json({
      message: "Logout Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async(req,res)=>{
  try {
    const loggedInUser = req.userId;
    const allUsers = await User.find({_id:{$ne:loggedInUser},}).select("-password");
    return res.status(201).json(allUsers);

  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Server error"});
  }
}

export const getCurrentUser = async (req,res) => {
    try {
        let user = await User.findById(req.userId)
        .select("-password")
        if(!user){
          return  res.status(400).json({message:"user doesn't found"})
        }
       return res.status(200).json({user});
    } catch (error) {
      return res.status(500).json({message:`getCurrentUser error ${error}`}) 
    }
}