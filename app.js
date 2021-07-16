function enviar() {


    let nome = document.getElementById('nome').value;
    let email = document.getElementById('e-mail').value;

    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let aviso = alert('Informações cadastradas com sucesso! :)');

    return 0;

}