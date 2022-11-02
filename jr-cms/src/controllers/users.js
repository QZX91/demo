const UserModel = require("../models/user");
const { generateToken } = require("../utils/jwt");

const register = async (req, res) => {
  const { username, password } = req.body;

  const user = new UserModel({ username, password });
  try {
    await user.hashPassword();
    await user.save();
  } catch (error) {
    res.status(400).json(error);
  }
  const token = generateToken({ id: user.id, username });
  res.status(201).json({ username, token });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username }).exec();
  if (!user) {
    res.status(401).json({ error: "invalid username or password" });
    return;
  }
  if (!user.validatePassword(password)) {
    res.status(401).json({ error: "invalid username or password" });
    return;
  }
  // const token = generateToken({ id: user.id, username });
  const token = generateToken({ id: user.id, username, role: 'teacher' });
  res.json({ username, token });
};

module.exports = { register, login };
