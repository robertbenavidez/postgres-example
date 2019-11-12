const db = require('../../data/db-config');

module.exports = {
    find
}


function find(id) {
    if(id) {
        return db('tasks')
            .where({id})
            .first();
    } else {
        return db('tasks');
    }
}