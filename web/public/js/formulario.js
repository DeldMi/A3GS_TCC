const formulario = document.getElementById("formulario");
const toke = "5831660337:AAFYDzzgrMJ0adP-i3bzq9VZxZwgeF-JK8M"
const key = ""




formulario.addEventListener("submit", (evento)=>{
    const nomeForm = document.getElementById("exampleInputNome1").value;
    const emailForm = document.getElementById("exampleInputEmail1").value;
    const telefoneForm = document.getElementById("exampleInputTelefone1").value;
    const opcoesForm = document.getElementById("exampleFormControlSelect1").value;
    const textoForm = document.getElementById("boxText").value;

    evento.preventDefault();


   if( nomeForm == "" || emailForm == "" || telefoneForm == "" || opcoesForm == "---" || textoForm == "" ){
    
    alert("Preencha todos os campos corretamente!");




   }else{
    alert(`Sr. ${nomeForm}, Sua mensagem foi enviada com sucesso! Em breve entraremos em contato pelo seu ${opcoesForm}.\nObridado!`);

    nomeForm = " "; 
    emailForm = " " 
    telefoneForm = " "; 
    opcoesForm = "---";
    textoForm = " ";
   }

    // console.log(`nome ${nomeForm} email ${emailForm} telefone ${telefoneForm} opções ${opcoesForm} texto ${textoForm}`);


});
