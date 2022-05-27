const { Item } = require('../models')

const getItems = async (req, res) => {
    let gotItem = await Item.find({})
    console.log('Got Items!')
    res.send(gotItem)
}

const getItemById = async (req, res) => {
    console.log(req)
    let gotItemById = await Item.find({ _id: req.params.id })
    console.log('Got Item by Id!')
    res.send(gotItemById)
}

const postItem = async (req, res) => {
    const item = new Item(
        req.body
    )
    await item.save()
    console.log('Created Item!')
    res.send(item)
}

const putItemById = async (req, res) => {
    let updateItem = await Item.findOneAndReplace(
        { _id: req.params.id },
        {
            ...req.body
        }
    )
    console.log(updateItem)
    res.send(updateItem)
}

const deleteItemById = async (req, res) => {
    let deletedItem = await Item.findOneAndRemove({ _id: req.params.id })
    console.log('Deleted Item!')
    res.send(deletedItem)
}

module.exports = {
    getItems,
    getItemById,
    postItem,
    putItemById,
    deleteItemById
}