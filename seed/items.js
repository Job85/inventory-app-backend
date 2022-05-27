const db = require('../db')
const { Item } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const items = [
        {
            location: 'demo location',
            category: 'demo category',
            item_name: 'demo item',
            description: 'demo description',
            unit_measure: 'demo measure',
            case_size: 'demo case size'
        }
    ]

    await Item.insertMany(items)
    console.log('Created items with inventories')
}

const run = async () => {
    await main()
    db.close()
}

run()