const pg = require("pg");

const localConnection = "postgresql://localhost/docusign_practice";

let connection;

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
  connection = process.env.DATABASE_URL;
} else {
  connection = localConnection;
}

const sharedConfig = {
  client: "pg",
  connection,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

const devConfig = {
  client: "pg",
  connection: "postgresql://localhost/docusign_practice",
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" },
};

module.exports = {
  development: { ...devConfig },
  production: {
    ...sharedConfig,
    pool: { min: 2, max: 10 },
  },
};
