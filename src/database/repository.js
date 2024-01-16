const client = require('./database');
//preciso ver como fechar a conexão e melhorar a maneira que chama o banco
module.exports.insert = async (num1,num2,type,resultSum) => {
    console.log('entrei repository insert')
    try{
        let values =[num1,num2,type,resultSum];
    let query = `INSERT INTO calculadora_contas_v2 (numero1, numero2, type,resultado,create_at)
            VALUES ($1, $2,$3,$4,now());`;

    console.log("informei a query pra rodar")  

    let rodou = await client.query(query,values);
    console.log("rodou:::: ",rodou);
    console.log('query',query);
    console.log('values',values);
    return rodou.rows;

    }catch(error){
        console.log('erro catch: ',error)
    }
    //ele nao passa aqui
    console.log('antes de finalizar conexao')
    client.end()
    
}

module.exports.list = async () => {
    console.log('entrei repository list')
   // let conexao = await db.connect(); passei a chamar direto no banco 
    let query = `select * from calculadora_contas_v2`;
    console.log('query',query);
    const lista = await db.query(query);
    console.log('lista reposytory:',lista.rows);
    await db.end();
    return lista.rows;
    


}