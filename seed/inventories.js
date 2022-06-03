const db = require('../db')
const { Inventory, Item } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const banana = async () => {
    const inventories = [
        {
            inventory_date: new Date,
            department_name: 'demo department',
            items: [],
            count: 12
        }
    ]

    await Inventory.insertMany(inventories)
    console.log('Created inventory sheet!')
}

const run = async () => {
    await banana()
    db.close()
}

run()