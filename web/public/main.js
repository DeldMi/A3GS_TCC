
const btnUp = document.getElementById("back-to-top"); // buttom Up for Top
const scrollValureMax = document.documentElement.scrollHeight; // Valor Maximo do Scroll


function getHtml() {
    var Element = document.getElementById("a");
    alert(Element.innerHTML);
    Element.style.color = "orange";
    Element.innerHTML = "GeeksforGeeks"; //?
}






// botao de subir au topo

document.addEventListener('scroll', (event)=>{


    let pot =(100 / scrollValureMax )
    let total = parseInt(pot * scrollY)// pega o numero inteiro da mutipricação da ponsentagem
    if (scrollY <= 95){
            btnUp.style.opacity = "0%"
            btnUp.style.zIndex = -100
        }else{
            btnUp.style.zIndex = 100
        }
        btnUp.style.opacity = `${total}%`;
        
        // resou ver esse codigo que é: quando chega no fim ou 95% da pagina o btnUu vai fica 100% visivel
        if (scrollY == scrollValureMax ){ 
            btnUp.style.opacity = `100%`;
        }
    
    // console.log(scrollY) // Test
})

btnUp.addEventListener('hover',()=>{
    console.log("OI")
})





// window.scrollTo(0, 0); Inseria posição do scroll





//com R$
const dinheiro = (numero=Number(0))=>{
return numero.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
// console.log(dinheiro(22));


const formEmial = document.getElementById('email');


formEmial.addEventListener('submit',(event)=>{
        event.preventDefault();
        let nome = event.target[0].value
        let email = event.target[1].value

        if(!nome == "" && !email == ""){
            setTimeout(()=>{},5000)
           alert("Enviado com sussesu!") 
        }
  
    
        event.target[0].focus()
        
})