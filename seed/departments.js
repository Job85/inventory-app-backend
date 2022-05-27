const db = require('../db')
const { Department } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const departments = [
        {
            departmentTitle: 'Demo Department'
        }
    ]

    await Department.insertMany(departments)
    console.log(`Created department(s)!`)
}

const run = async () => {
    await main()
    db.close()
}

run()