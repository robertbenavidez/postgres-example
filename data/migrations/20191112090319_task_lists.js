
exports.up = function(knex) {
  return knex.schema.createTable('task_lists', tbl => {
      tbl.increments();
      tbl
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references("tasks.id")
        .onUpdate("cascade")
        .onDelete('cascade'); 
      tbl
        .integer('list_id')
        .unsigned()
        .notNullable()
        .references("lists.id")
        .onUpdate("cascade")
        .onDelete('cascade');
      tbl
        .varchar("description", 255);
      tbl   
        .boolean("completed").defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("task_lists")
};
