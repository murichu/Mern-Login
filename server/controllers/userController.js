import User from '../models/User.js';

export const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};