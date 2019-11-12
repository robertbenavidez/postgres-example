const task_lists = [
  {
    task_id: 1,
    list_id: 1,
    description: "2 packs, soba"
  },
  {
    task_id: 2,
    list_id: 1,
    description: "one dozen"
  },
  {
    task_id: 3,
    list_id: 1,
    description: "1 bunch"
  },
  {
    task_id: 4,
    list_id: 2,
    description: "15 reps, 3 sets"
  },
  {
    task_id: 5,
    list_id: 2,
    description: "30 min, jogging"
  },
  {
    task_id: 6,
    list_id: 3,
    description: "Data Modeling"
  },
  {
    task_id: 7,
    list_id: 3
  },
  {
    task_id: 8,
    list_id: 3,
    description: "Hy-Vee"
  }
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task_lists").then(function() {
    // Inserts seed entries
    return knex("task_lists").insert(task_lists);
  });
};