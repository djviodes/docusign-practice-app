exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.varchar("full_name", 128).notNullable();
    table.varchar("username", 128).notNullable().unique();
    table.varchar("password", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
