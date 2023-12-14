const User = require('../models/User');
const readUsers = async (req, res) => {
  try {
    let answer = await User.find({});
    res.json(answer);
  } catch (err) {}
};
let id = 0;
const createUsers = async (req, res) => {
  let answer = await User.find({});
  if (!answer[0]) {
    id = 1;
  } else {
    id = answer[answer.length - 1].userId + 1;
  }
  const { name, age } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, data: [] });
  }
  let newUser = await User.create({ userId: id, name: name, age: age });
  res.status(202).json(newUser);
};

const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    let answer = await User.find({});
    const answer2 = answer.find((User) => {
      return User.userId === Number(id);
    });
    if (!answer2) {
      return express.json({ success: false, data: [] });
    }
    if (age == -5) {
      await User.findByIdAndUpdate({ _id: answer2._id }, { assigned: name });
    } else {
      await User.findByIdAndUpdate(
        { _id: answer2._id },
        { name: name, age: age }
      );
    }

    res.status(202).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (id == -2) {
      await User.deleteMany({});
    }
    let answer = await User.find({});
    const answer2 = answer.find((User) => {
      return User.userId === Number(id);
    });
    if (!answer2) {
      return res.json({ success: false, data: [] });
    }
    const newUsers = await User.findByIdAndDelete({ _id: answer2._id });
    res.status(202).json({ data: newUsers, success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  readUsers,
  createUsers,
  updateUsers,
  deleteUser,
};
