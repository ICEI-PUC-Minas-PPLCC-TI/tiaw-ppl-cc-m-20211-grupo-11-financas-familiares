window.onload = () => {
    if (localStorage.getItem('username'))
        usuario.value = localStorage.getItem('username')
    login.onsubmit = (evento) => {
        console.log({ nome: usuario.value, senha: senha.value});
        evento.preventDefault();
        window.localStorage.setItem('username', usuario.value);
        usuario.value = '';
        senha.value = '';
    }
}
