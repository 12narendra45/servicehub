const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      phone,
      role,
    });

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createUser };
