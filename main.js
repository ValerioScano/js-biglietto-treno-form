document.getElementById("data-send").addEventListener("click", function (event) {
    event.preventDefault();
    const età = document.getElementById("user-age").value;
    const distanza = document.getElementById("user-km").value;
    let prezzoFinale = distanza * 0.21
    if (età < 18) {
        prezzoFinale = prezzoFinale * 0.8
    } else if (età > 65) {
        prezzoFinale = prezzoFinale * 0.6
    }

    document.getElementById("tariff").classList.add("d-none")
    document.getElementById("ticket").innerHTML = `<div><b>Passeggero: </b>${document.getElementById("user-title").value
        } ${document.getElementById("user-name").value} ${document.getElementById("user-lastname").value}</div> <div><b>Costo del biglietto: </b>${prezzoFinale.toFixed(2)}€</div>`
}) 
