const Blog = require('../models/Blog');
const readBlogs = async (req, res) => {
  try {
    let answer = await Blog.find({});
    res.json(answer);
  } catch (err) {}
};


const createBlogs = async (req, res) => {
  try{
    console.log('Creating');
    const {title, description, content, image, author} = req.body;
    let allBlogs = await Blog.find({});
    let itemTwo = await Blog.create({title: title, description: description, content: content, image: image, author: author, id: allBlogs.length++});
    res.json({success: true, data: itemTwo});
  } catch (err) {
    console.log(err);
  }
};

const updateBlogs = async (req, res) => {
	try {
		const { id } = req.params;
		const {title, image, description, content} = req.body;
		let item = await Blog.findOneAndUpdate({ id: id }, {title:title, image:image, description:description, content:content});
		if (!item) {
			return res.json({ success: false, data: [] });
		}
		res.json({ data: item, success: true });
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
