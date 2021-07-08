function showProducts(){
    let xhttp = new XMLHttpRequest()
    let container = document.createElement("div")
    let table = document.createElement("table")
    table.style.textAlign = 'center'
    container.style.margin = '0 auto'
    container.style.width = '50%'
    container.style.borderStyle = 'solid'
    container.style.borderColor = 'black'
    let head = document.createElement("thead")
    head.style.backgroundColor = '#3A4042'
    head.style.color = 'white'
    let headRow = document.createElement("tr")
    let name = document.createElement("th")
    name.innerHTML = "Nombre"
    let price = document.createElement("th")
    price.innerHTML = "Precio"
    headRow.appendChild(name)
    headRow.appendChild(price)
    head.appendChild(headRow)
    
    let body = document.createElement("tbody")

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const products = JSON.parse(xhttp.responseText)
            for (let i = 0; i < products.length; i++) {
                console.log('entrando')
                let bodyRow = document.createElement("tr")
                let productName = document.createElement("td")
                productName.innerHTML = products[i].name
                let productPrice = document.createElement("td")
                productPrice.innerHTML = products[i].price
                bodyRow.appendChild(productName)
                bodyRow.appendChild(productPrice)
                body.appendChild(bodyRow)
            }
        }
    };

    table.appendChild(head)
    table.appendChild(body)
    container.appendChild(table)
    document.body.appendChild(container)
    xhttp.open("GET", "http://localhost:3000/showProducts", true);
    xhttp.send();
}

function addProduct(){
    let xhttp = new XMLHttpRequest()
    let form = new FormData() 
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            form = document.getElementById("dataForm")
            xhttp.send()
            console.log(form.values)
        }
    }
    xhttp.open("POST", "https://localhost:3000/addProduct", true)
}

