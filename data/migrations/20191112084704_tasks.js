
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
      tbl.increments();
      tbl
        .varchar("name", 255)
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
