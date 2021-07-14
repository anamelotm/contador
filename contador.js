window.addEventListener("load", () => {
    const botao = document.getElementById("botao")

    botao.addEventListener("click", () => {
        //window.addEventListener("load", () => {

        //tempo em segundos que o contador vai durar
        let sec = 180;

        const countDiv = document.getElementById("timer");

        const secpass = () => {

            let min = Math.floor(sec / 60); //retorna o número inteiro, apenas cortando os números após a vírgula
            let segundosRestantes = sec % 60;

            if (segundosRestantes < 10) {
                segundosRestantes = "0" + segundosRestantes;
            }

            if (min < 10) {
                min = "0" + min;
            }

            //vai gerar o formato de 02:30
            countDiv.innerHTML = min + ":" + segundosRestantes;

            //condição final
            if (sec > 0) {
                sec = sec - 1;
            } else {
                countDiv.innerHTML = "Acabou!";
            }
        };

        const countDown = setInterval(() => secpass(), 1000) //1000 miliseg - 1 seg

    });

});