const CalculatorModel = require('../model/calculatorModel');
const repostory = require('../database/repository');


module.exports.calculate = (req,res) => {

    console.log('entrei na rota calculator',req.body);
    let type = req.body.type;
    let calculatorModel = new CalculatorModel(req.body.num1, req.body.num2, type);

    calculatorModel.calculator();
    console.log('voltei pro controller antes do send');
    res.send('Operação concluída com sucesso!');

}

module.exports.list = async (req,res) => {
    console.log('entre no controller list');
    const listagem = await repostory.list();
    console.log('voltei pro controller list antes do return', listagem);
    return res.status(200).send(listagem);

}



  



 
 