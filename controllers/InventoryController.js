const { Inventory } = require('../models')

const getInventory = async (req, res) => {
    let gotInventory = await Inventory.find({})
    console.log('Got Inventory')
    res.send(gotInventory)
}

const postInventory = async (req, res) => {
    const inventory = new Inventory(
        req.body
    )
    await inventory.save()
    res.send(inventory)
}

const putInventory = async (req, res) => {
    let putsInventory = await Inventory.findOneAndReplace(
        { _id: req.params.id },
        {
            ...req.body.createdDate
        },
        { department_id: req.params.departmentId }
    )
    console.log('Updated Inventory!')
    res.send(putsInventory)
}

const deleteInventoryById = async (req, res) => {
    let deletedInventory = await Inventory.findOneAndRemove({ _id: req.params.id })
    console.log('Deleted Inventory!')
    res.send(deletedInventory)
}

module.exports = {
    getInventory,
    postInventory,
    putInventory,
    deleteInventoryById
}