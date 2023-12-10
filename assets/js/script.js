function calcImc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

function setResult(imc){

    const result = document.querySelector('.result');

    result.innerHTML='';

    const p = document.createElement('p');

    if(!Number.isNaN(imc)){
        if(imc < 18.5){
            p.classList.add('good');
            p.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}(Abaixo do peso).`
        } else if((imc >= 18.5)&&(imc<=24.9)){
            p.classList.add('good');
            p.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}(Peso normal).`
        } else if((imc >= 25)&&(imc<=29.9)){
            p.classList.add('good');
            p.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}(Sobrepeso).`
        } else if((imc >= 30)&&(imc<=34.9)){
            p.classList.add('good');
            p.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}(Obesidade grau 1).`
        } else if((imc >= 35)&&(imc<=39.9)){
            p.classList.add('good');
            p.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}(Obesidade grau 2).`
        } else{
            p.classList.add('good');
            p.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}(Obesidade grau 3).`
        }
    } else{
        p.classList.add('bad');
        p.innerHTML = `Peso ou altura inválidos!.`
    }
    result.appendChild(p);
}

function main(){

    const form = document.querySelector('.form');

    function submitImc(event){

        event.preventDefault();

        const peso = form.querySelector('#input-peso').value;
        const altura = form.querySelector('#input-altura').value;
        const imc = calcImc(peso, altura);

        setResult(imc);
        
    }

    form.addEventListener('submit', submitImc);

}

main();