const knex = require("../db");

function getAllBugs() {
    return knex("bugs").select();
}

function getBugById(id) {
    return knex("bugs").select().where("b_id", id);
}

function postNewBug(descr) {
    return knex("bugs").insert({ descr: descr });
}

function updateBug(id, descr) {
    return knex("bugs").where({ b_id: id }).update("descr", descr);
}

module.exports = { getAllBugs, getBugById, postNewBug, updateBug };
