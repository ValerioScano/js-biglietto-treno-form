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

    document.getElementById("final-price").innerText = prezzoFinale
}) 
