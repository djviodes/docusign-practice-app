const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users").then(() => {
    return knex("users").insert([
      {
        full_name: "David Viodes",
        username: "djviodes",
        password: bcrypt.hashSync("Passw0rd", 14),
      },
    ]);
  });
};
