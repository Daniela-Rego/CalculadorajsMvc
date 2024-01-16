const express = require('express');
const controller = require('./controller');
const app = express();
app.use(express.json());


app.post('/calculator',controller.calculate);  
app.get('/calculator/list',controller.list);

//TODO devo retornar um array com todas as operacoes feitas na calculadora
//app.get('/calculator/list',controller.list);//TODO devo apagar a lista como um todo quando essa rota for chamada
//app.delete('/calculator/list/delete',controller.listDelete);
   
//app.listen(8081,() => {console.log('Servidor express rodando')})

app.listen(8081,(err)=>{
    if(err){
        console.log('Servidor OFF',err);
    }else{
        console.log('Servidor ON');
    }
})

