

var modal = document.getElementById('id01');

window.onload = () =>{
    login.onsubmit = (evento) => {
        console.log({ nome: usuario.value, senha: senha.value});
        window.localStorage.setItem('username', usuario.value);
        window.localStorage.setItem('password', senha.value);
    }
}



window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

