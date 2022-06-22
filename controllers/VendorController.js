const { Vendor } = require('../models')

const getVendor = async (req, res) => {
    let gotVendor = await Vendor.find({})
    console.log('Got Vendor')
    res.send(gotVendor)
}

const getVendorById = async (req, res) => {
    console.log(req)
    let gotVendorById = await Vendor.find({ _id: req.params.id })
    console.log('Got Vendor by Id!')
    res.send(gotVendorById)
}
const createVendor = async (req, res) => {
    const vendor = new Vendor(
        req.body
    )
    await vendor.save()
    console.log('Created Vendor')
    res.send(vendor)
}

const updateVendor = async (req, res) => {
    let putsVendor = await Vendor.findOneAndReplace(
        { _id: req.params.id },
        {
            ...req.body
        }
    )
    console.log('Updated Vendor!')
    res.send(putsVendor)
}

const deleteVendorById = async (req, res) => {
    let deletedVendor = await Vendor.findOneAndRemove({ _id: req.params.id })
    console.log('deletedVendor')
    res.send(deletedVendor)
}

module.exports = {
    getVendor,
    getVendorById,
    createVendor,
    updateVendor,
    deleteVendorById
}