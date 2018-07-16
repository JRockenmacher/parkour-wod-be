
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workouts', table => {
      table.increments()
      table.text('name')
      table.text('description')
      table.text('wType')
      // countdown or countup timer
      table.text('target_1')
      table.text('target_2').defaultsTo(null)
      table.text('mType').defaultsTo('compound')
      // how to make a default class to be a catch all for upper, lower, core, compounds
      table.bool('$equipment').defaultsTo(false)
      table.bool('weights').defaultsTo(false)
      table.bool('partner').defaultsTo(false)
      table.bool('approved').defaultsTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workouts')
};
