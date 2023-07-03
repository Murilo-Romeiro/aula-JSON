function busca(){
    let cod = document.getElementById("cod").value
    let marca = document.getElementById("marca")
    let modelo = document.getElementById("modelo")
    let ano = document.getElementById("ano")
    let url = "./cars.json"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            for(var car of data.cars){
                if(cod == car.placa){
                    marca.value = car.marca
                    modelo.value = car.modelo
                    ano.value = car.ano
                    break
                }
            }
        })
}