const database = require("./knex-config");

module.exports = {
    listWODs(){
        return database('workouts')
    },
    createWOD(workout){
        return database('workouts')
        .insert(workout)
        .returning('*')
        .then(record => record[0])
    },
    readWOD(id){
        return database('workouts')
        .select()
        .where('id', id)
        .first()
    },
    updateWOD(id, workout){
        return database('workouts')
        .update(workout)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteWOD(id){
        return database('workouts')
        .delete()
        .where('id', id)
    },

    listMove(){
        return database('movements')
    },
    createMove(movement){
        return database('movements')
        .insert(movement)
        .returning('*')
        .then(record => record[0])
    },
    readMove(id){
        return database('movements')
        .select()
        .where('id', id)
        .first()
    },
    updateMove(id, movement){
        return database('movements')
        .update(movement)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteMove(id){
        return database('movements')
        .delete()
        .where('id', id)
    }
};
