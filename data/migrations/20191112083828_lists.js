
exports.up = function(knex) {
  return knex.schema.createTable('lists', tbl => {
      tbl.increments();
      tbl
        .varchar('title', 255)
        .notNullable()
      tbl
        .timestamp('created_at').defaultTo(knex.fn.now());
      tbl
        .timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('lists');
};
