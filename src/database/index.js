const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_DB,
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);

  return rows;
};
