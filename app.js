//console.log(dados[0]);//

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa)

    

let resultados="";
let titulo="";
let descricao="";
let tags="";

if (campoPesquisa ==''){
    section.innerHTML='Você precisa digitar algum discípulo de cristo'
    return
}

for(let dado of dados ){
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
     resultados += 
    `<div class="item-resultado">
        <h2><a href="#">${dado.titulo}</a></h2>

            <p class="descricao-meta">${dado.descricao}
            </p>

            <a href="${dado.link}" target="_blank">Saiba mais sobre ${dado.titulo}</a>
        
    </div>`
    

    }
        

    console.log(dado.titulo.includes(campoPesquisa))

    
}

if (!resultados){
    resultados = "Nada foi encontrado ";
}

section.innerHTML=resultados;


}








