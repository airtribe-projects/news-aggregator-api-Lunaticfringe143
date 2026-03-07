const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const SECRET = "secret";

exports.signup = async (req,res)=>{

 const {name,email,password,preferences} = req.body;

 if(!email || !password){
   return res.status(400).json({message:"Missing fields"});
 }

 const hashed = await bcrypt.hash(password,10);

 userModel.create({
   id: Date.now().toString(),
   name,
   email,
   password: hashed,
   preferences: preferences || []
 });

 res.status(200).json({message:"User created"});
};

// exports.signup = async (req,res)=>{

//  const {name,email,password,preferences} = req.body;

//  if(!email || !password){
//    return res.status(400).json({message:"Missing fields"});
//  }

//  const hashed = await bcrypt.hash(password,10);

//  userModel.create({
//    id: Date.now().toString(),
//    name,
//    email,
//    password: hashed,
//    preferences: preferences || []
//  });

//  res.status(200).json({message:"User created"});
// };

exports.login = async (req,res)=>{

 const {email,password} = req.body;

 const user = userModel.findByEmail(email);

 if(!user){
   return res.status(401).json({message:"Invalid credentials"});
 }

 const valid = await bcrypt.compare(password,user.password);

 if(!valid){
   return res.status(401).json({message:"Invalid credentials"});
 }

 const token = jwt.sign({userId:user.id},"secret");

 res.status(200).json({token});
};

exports.getPreferences = (req,res)=>{

 const user = userModel.findById(req.user.userId);

 res.status(200).json({
  preferences: user.preferences
 });

};


exports.updatePreferences = (req,res)=>{

 const {preferences} = req.body;

 const user = userModel.updatePreferences(req.user.userId, preferences);

 res.status(200).json({
  preferences: user.preferences
 });

};