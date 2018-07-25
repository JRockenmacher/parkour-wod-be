
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movements', table => {
      table.increments()
      table.text('name')
      table.text('description')
      table.text('demo')
      table.text('target_1').defaultsTo(null)
      table.text('target_2').defaultsTo(null)
      table.text('mType').defaultsTo(null)
      table.text('skill_level')
      table.bool('equipment').defaultsTo(false)
      table.bool('weights').defaultsTo(false)
      table.bool('partner').defaultsTo(false)
      table.bool('approved')
      // .defaultsTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movements')
};
