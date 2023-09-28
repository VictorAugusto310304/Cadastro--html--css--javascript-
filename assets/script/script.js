
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkform();
})

eventListenerBlur(username, checkInputUsername);
eventListenerBlur(email, checkInputEmail);
eventListenerBlur(password, checkInputPassword);
eventListenerBlur(passwordConfirmation, checkInputPasswordConfirmation);


function checkInputUsername(){
    const usernameValue = username.value;
    if(usernameValue === ""){
        errorInput(username, "Usuário inválido");
    }
    else{
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Email inválido");
    }
    else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Senha inválida");
    }
    else if(passwordValue.length < 8){
        errorInput(password, "Senha precisa ter no mínimo 8 caracteres");
    }
    else{
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória");
    }
    else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "Senhas diferentes");
    }
    else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}

function checkform(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content");
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });
    
    if(isValid){
        alert("CADASTRO REALIZADO COM SUCESSO!");
    }
    else{
        alert("Preencha todos os campos corretamente");
    }
}

function eventListenerBlur(formItem, checkfunction){
    formItem.addEventListener("blur", () => {
        checkfunction();
    });
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.className = "form-content error";
}