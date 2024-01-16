const repostory= require('../database/repository');
//teste
module.exports = class CalculatorModel {

    constructor(numb1, numb2, type) {
        this.num1 = numb1;
        this.num2 = numb2;
        this.type = type;


    }



    calculator = async () => {
        if (this.type == 'sum') {
            console.log('entrei model sum');
            await this.sum();
           return;
            
        }
        if (this.type == 'Div') {
            this.division();
            res.send('Operação concluída com sucesso!');
        }
        if (this.type == 'Mult') {
            this.mult();
            res.send('Operação concluída com sucesso!');
        }

        if (this.type == 'Diff') {
            this.toDecrease();
            res.send('Operação concluída com sucesso!');
        }
        console.log('final if');
    }
    sum = async () => {
        let resultSum = this.num1 + this.num2;
        console.log('entrei no model.soma',resultSum)
       const resultado = await repostory.insert(this.num1,this.num2,this.type,resultSum);
       console.log('voltei para o  model.soma',resultado);
        return resultSum;
    };

    division = () => {
        let div = this.num1/this.num2;
        console.log('entrei no controller.division')
        return div;
    }
    multiplication = () => {
       let mult = this.num1 * this.num2;
        console.log('entrei no controller.multiplication')
        return mult;
    }
    toDecrease = () => {
       let decrease = this.num1 - this.num2;
        console.log('entrei no controller.toDecrease')
        return decrease;
    }
    list = (req, res) => { }
    listDelete = (req, res) => { }


}