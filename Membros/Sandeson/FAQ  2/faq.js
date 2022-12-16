const pergunta = document.querySelectorAll('.pergunta')
const resposta = document.querySelectorAll('.resposta')

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click', () => {
        if(pergunta[i].classList.contains('fechar')){
            pergunta[i].classList.toggle('fechar')
            resposta[i].classList.toggle('ativar')
        }else{
            pergunta[i].classList.add('fechar')
            resposta[i].classList.add('ativar')
        }
    })
}