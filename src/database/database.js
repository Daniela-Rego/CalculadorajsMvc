const  { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  detabase: 'Calculadora',
  password: '1234',
  port: 5432,
 })
 client.connect();
module.exports = client