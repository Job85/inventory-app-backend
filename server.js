const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const AppRouter = require('./routes/AppRouter')

const app = express()

const PORT = process.env.PORT || 3001



app.use(cors({
    origin:
        ['http://localhost:3000',
            'http://restaurant-inventory-77229.web.app',
            'https://restaurant-inventory-77229.web.app'
        ],
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept',
    credentials: true
}))
app.use(express.json())
app.use(logger('dev'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.use('/api', AppRouter)
app.get('/', (req, res) => {
    res.send('This is root!')
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})