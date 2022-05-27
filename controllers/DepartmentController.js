const { Department } = require('../models')

const getDepartment = async (req, res) => {
    let gotDepartment = await Department.find({})
    console.log('Got Department')
    res.send(gotDepartment)
}

const getDepartmentById = async (req, res) => {
    console.log(req)
    let gotDepartmentById = await Department.find({ _id: req.params.id })
    console.log('Got Department by Id!')
    res.send(gotDepartmentById)
}
const createDepartment = async (req, res) => {
    const department = new Department(
        req.body
    )
    await department.save()
    console.log('Created Department')
    res.send(department)
}

const updateDepartment = async (req, res) => {
    let putsDepartment = await Department.findOneAndReplace({ _id: req.params.id })
    console.log('Updated Department!')
    res.send(putsDepartment)
}

const deleteDepartmentById = async (req, res) => {
    let deletedDepartment = await Department.findOneAndRemove({ _id: req.params.id })
    console.log('deletedDepartment')
    res.send(deletedDepartment)
}

module.exports = {
    getDepartment,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartmentById
}