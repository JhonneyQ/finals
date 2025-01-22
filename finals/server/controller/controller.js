const Blog = require("../model/model");

const getAllData = async (req, res) => {
    try {
        const product = await Blog.find()
        res.status(200).json({ data: product, message: "succesful" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


const getAllDataById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Blog.findById(id)
        res.status(200).json({ data: product, message: "succesful" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


const deleteById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Blog.findByIdAndDelete(id)
        res.status(200).json({ data: product, message: "succesful" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const postData = async (req, res) => {
    try {
        const product = Blog({...req.body})
        await product.save()
        res.status(200).json({ data: product, message: "succesful" })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


module.exports = {
    getAllData,
    getAllDataById,
    deleteById,
    postData
}