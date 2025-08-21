import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

// login user
const LoginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,message:"User doesn't Exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false, message:"Invalid Credentials"})
        }
        
        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error})
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret_key', { expiresIn: '7d' });
}

//register user 
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        if (!name || !password || !email) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }
        
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(201).json({ success: true, token, message: "User registered successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Registration failed" });
    }
}

export { LoginUser, registerUser };