const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const tasksRouter = require('./routers/tasksRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('combined'))

server.use('/api/tasks', tasksRouter)

// sanity check //

server.get('/', (req,res) => {
    res.send('Server is running')
})

module.exports = server;