const database = require("./knex-config");

module.exports = {
    list(){
        return database('workouts')
    },
    create(workout){
        return database('workouts')
        .insert(workout)
        .returning('*')
        .then(record => record[0])
    },
    read(id){
        return database('workouts')
        .select()
        .where('id', id)
        .first()
    },
    update(id, workout){
        return database('workouts')
        .update(workout)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('workouts')
        .delete()
        .where('id', id)
    }
};
