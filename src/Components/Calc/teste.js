
//se aperta os botões de numero 
if (numero.includes(botaoApertado)) {
    //contacatena o numero apertado 
    numero = numero + botaoApertado;
    //se aperta os botões de sinal (menos o =)
} else if (sinal.includes(botaoApertado)) {
    //adiciona o numero concatenado ao arrey
    array.push(numero);
    //adiciona o sinal ao arrey
    array.push(botaoApertado);
    //limpa a varialvel numero
    numero = '';

    // oque sai deste 2 if é um array com todos os numeros concatenasdos adicionado a um array separados por termos de sinais
    //exemplo(virgula significa separaão entre os termos do array)
    // 1234 , + , 3456, -3212 , * , 231 , ...
    // e isso persistirar ate a pessoa aperta o botão de igual


    //se aperta o botão de igual
} else if (botaoApertado == "=") {

    //um for que percore todo o arrey executando as multiplicação e divisão
    for (contador = 0; contador < array.length; contador++) {
        //achou multiplicação
        if (array[contador] == '*') {
            //pega o termo anterior ao sinal e posterior ao sinal(dois numero)
            num1 = parseFloat(array[contador - 1]);
            num2 = parseFloat(array[contador + 1]);
            //executa a multiplicação
            resultado = num1 * num2;
            // apaga os 3 termos do array referente a operação(n1,n2 e o sinal)
            array.splice(contador - 1, 3);
            //adiciona o resultado no lugar dos outros 3 termos
            array.splice(contador - 1, 0, resultado);
        }
        if (array[contador] == '/') {
            num1 = parseFloat(array[contador - 1]);
            num2 = parseFloat(array[contador + 1]);
            resultado = num1 * num2;
            array.splice(contador - 1, 3);
            array.splice(contador - 1, 0, resultado);
        }
    }
    for (contador = 0; contador < array.length; contador++) {
        if (array[contador] == '+') {
            num1 = parseFloat(array[contador - 1]);
            num2 = parseFloat(array[contador + 1]);
            resultado = num1 * num2;
            array.splice(contador - 1, 3);
            array.splice(contador - 1, 0, resultado);
        }
        if (array[contador] == '-') {
            num1 = parseFloat(array[contador - 1]);
            num2 = parseFloat(array[contador + 1]);
            resultado = num1 * num2;
            array.splice(contador - 1, 3);
            array.splice(contador - 1, 0, resultado);
        }
    }
}