// Pergunta inicial sobre a escolha de Front-End ou Back-End
let escolha1 = window.prompt("Você quer seguir para área de Front-End ou Back-End? Digite 'Front-End' ou 'Back-End'.");

if (escolha1.toLowerCase() === 'front-end') {
    // Escolha de Front-End: React ou Vue
    let escolha2 = window.prompt("Você quer aprender React ou Vue?");
    if (escolha2.toLowerCase() === 'react') {
        alert("Você escolheu aprender React!");
    } else if (escolha2.toLowerCase() === 'vue') {
        alert("Você escolheu aprender Vue!");
    } else {
        alert("Escolha inválida.");
    }
} else if (escolha1.toLowerCase() === 'back-end') {
    // Escolha de Back-End: C# ou Java
    let escolha2 = window.prompt("Você quer aprender C# ou Java?");
    if (escolha2.toLowerCase() === 'c#') {
        alert("Você escolheu aprender C#!");
    } else if (escolha2.toLowerCase() === 'java') {
        alert("Você escolheu aprender Java!");
    } else {
        alert("Escolha inválida.");
    }
} else {
    alert("Escolha inválida.");
}

// Escolha entre especializar-se ou tornar-se Fullstack
let escolha3 = window.prompt("Você quer se especializar na área escolhida ou se tornar Fullstack?\n Digite 'especializar' para Sim ou 'fullstack'");
if (escolha3.toLowerCase() === 'especializar') {
    alert("Você escolheu se especializar na área escolhida!");
} else if (escolha3.toLowerCase() === 'fullstack') {
    alert("Você escolheu se tornar Fullstack!");
} else {
    alert("Escolha inválida.");
}

// Escolha das tecnologias
let tecnologias = [];
let continuar = true;

while (continuar) {
    let novaTecnologia = window.prompt("Digite uma tecnologia que você gostaria de aprender:");
    tecnologias.push(novaTecnologia);

    let continuarResposta = window.prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda 'ok' para continuar ou 'cancelar' para encerrar.");
    if (continuarResposta.toLowerCase() !== 'ok') {
        continuar = false;
    }
}

// Exibindo as tecnologias escolhidas
alert("Você gostaria de aprender as seguintes tecnologias: " + tecnologias.join(", "));
