const knex = require('../db');


function getAllBugs() {
    return knex('bugs').select();
}

function getBugById(id){
    return knex('bugs').select().where('b_id', id);
}

module.exports = {getAllBugs, getBugById};


