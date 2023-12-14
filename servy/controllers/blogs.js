const Blog = require('../models/Blog');
const readBlogs = async (req, res) => {
  try {
    let answer = await Blog.find({});
    res.json(answer);
  } catch (err) {}
};
let id = 0;
const createBlogs = async (req, res) => {
  let answer = await Blog.find({});
  if (!answer[0]) {
    id = 1;
  } else {
    id = answer[answer.length - 1].BlogId + 1;
  }
  const { name, age } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, data: [] });
  }
  let newBlog = await Blog.create({ BlogId: id, name: name, age: age });
  res.status(202).json(newBlog);
};

const updateBlogs = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    let answer = await Blog.find({});
    const answer2 = answer.find((Blog) => {
      return Blog.BlogId === Number(id);
    });
    if (!answer2) {
      return express.json({ success: false, data: [] });
    }
    if (age == -5) {
      await Blog.findByIdAndUpdate({ _id: answer2._id }, { assigned: name });
    } else {
      await Blog.findByIdAndUpdate(
        { _id: answer2._id },
        { name: name, age: age }
      );
    }

    res.status(202).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (id == -2) {
      await Blog.deleteMany({});
    }
    let answer = await Blog.find({});
    const answer2 = answer.find((Blog) => {
      return Blog.BlogId === Number(id);
    });
    if (!answer2) {
      return res.json({ success: false, data: [] });
    }
    const newBlogs = await Blog.findByIdAndDelete({ _id: answer2._id });
    res.status(202).json({ data: newBlogs, success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  readBlogs,
  createBlogs,
  updateBlogs,
  deleteBlog,
};
