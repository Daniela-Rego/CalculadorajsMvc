const db = require('./database');

async function createTables() {
  console.log('entrei na criação de tabelas');
  try {
    await db.connect();
    await db.query(`CREATE TABLE calculadora_contas_v2(
    id serial PRIMARY KEY,
    numero1 integer  NOT NULL,
    numero2 integer  NOT NULL,
    type VARCHAR (20)  NOT NULL,
    resultado integer  NOT NULL,
    create_at DATE NOT NULL
)`)


    
  }catch (err) {
  console.log("Tabelas erro", err);
  }finally{
    await db.end()
  }
  
}

createTables()
