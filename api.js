
function buscar(){
    let cep = document.getElementById('digitaCep').value

    console.log(cep)

    let url = `https://brasilapi.com.br/api/cep/v1/ ${cep}`
    fetch(url)
        .then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data)
            document.getElementById('cep').innerHTML = data.cep;
            document.getElementById('estado').innerHTML = data.state;
            document.getElementById('cidade').innerHTML = data.city;
            document.getElementById('bairro').innerHTML = data.neighborhood;
            document.getElementById('rua').innerHTML = data.street;
        }).then((error) => {
            console.log(error)
        })
}
