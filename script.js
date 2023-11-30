// IDs: inNome, inIdade, btCategorizar, outResposta

function retornarTracos(){
    var inNome = document.getElementById("inNome");
    var outResposta = document.getElementById("outResposta");
    nome = inNome.value;

    var vetor = nome.split(" ");

    var tracos = "";
    for(var i = 0; i < vetor.length; i++){
        tracos += "-".repeat(vetor[i].length) + " ";
    }

    console.log(tracos);
    console.log(vetor[0]);

    var categoria = categorizarAluno();

    outResposta.innerHTML = nome + "<br>"+ tracos  + "<br>" + categoria;
}

function categorizarAluno(){
    var inIdade = document.getElementById("inIdade");
    idade = inIdade.value;

    var categoria;
    if(idade <= 12){
        categoria = "Infantil";
    } else {
        categoria = "Adulto";
    }

    return categoria;
}

var retornar = document.getElementById("btCategorizar");
retornar.addEventListener("click", retornarTracos);