import User from '../models/User.js';
import jwt from 'jsonwebtoken'; // Import the default export
import { validationResult } from 'express-validator';
import admin from '../firebase.cjs';

const { sign } = jwt; // Destructure `sign` from the default export

export async function register(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() }); // Use 422 for validation errors
    }

    const { name, email, password, phone, role } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    
    let userRecord
    
    try{
      userRecord = await admin.auth().createUser({
        email,password
      })
    }
    catch(error){
      if(error.code === 'auth/email-already-exists'){
        userRecord =await admin.auth().getUserByEmail(email)
      }
    }
    user = new User({
      name,
      email,
      password,
      phone,
      role,
      firebaseUID:userRecord.uid
    });

    await user.save();

    const token = sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(201).json({ 
      message: 'User registered successfully', 
      token 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
