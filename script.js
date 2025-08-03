async function wetterSuchen(){
    //Input Feld holen und auslesen, Wert in ort speichern
    let input = document.querySelector("input")
    let ort = input.value

    //Wetterdaten vom Backend holen

    let daten = await fetch("https://api.christophmuck.de/wetter?ort=" + ort)
    
    //Datenpaket "auspacken"
    let wetter = await daten.json()

    //Beschreibung, Temperatur und Bild aus dem Daten herausnehmen
    console.log(wetter.aktuell)
    let beschreibung = wetter.aktuell.beschreibung
    let imgUrl = wetter.aktuell.img
    let temp = wetter.aktuell.tempMax


    //Werte in das HTML einfügen

    let h2 = document.querySelector("h2")
    h2.textContent = ort

    let img = document.querySelector("img")
    img.src=imgUrl

    let p = document.querySelector("p")
    p.textContent = beschreibung

    let h3 = document.querySelector("h3")
    h3.textContent= "Temperatur: " + temp

}