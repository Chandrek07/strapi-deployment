const path = require('path');

module.exports = ({env}) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      host: env('DATABASE_HOST', 'dpg-cj8gnsljeehc73bcqjh0-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'simpleone_1z1r'),
      user: env('DATABASE_USERNAME', 'simpleone_1z1r_user'),
      password: env('DATABASE_PASSWORD', 'nv5PWOLiXjgJPyQ0e7mvvCtS1hpXdEGn'),
      ssl: env.bool('DATABASE_SSL', true),

    },
  },
});
