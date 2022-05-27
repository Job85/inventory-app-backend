const db = require('../db')
const { Inventory, Department } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const banana = async () => {
    const demoDepartment = await Department.find({ departmentTitle: 'Demo Department' })

    const inventories = [
        {
            department_id: demoDepartment[0]._id
        }
    ]

    await Inventory.insertMany(inventories)
    console.log('Created inventories with departments!')
}

const run = async () => {
    await banana()
    db.close()
}

run()