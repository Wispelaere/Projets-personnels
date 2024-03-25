// Récupere tout mes classes avec : playbutton
let boutonsBatterie = document.querySelectorAll(".playButton");

//  Boucle "Pour chaque" bouton de batterie avec le "forEach"
boutonsBatterie.forEach(bouton => {

    // écouteur d'événement pour les touches du clavier, ici j'utilise "keypress" pour touche clavier
    document.addEventListener("keypress", function (event) {

        // je récupère la touche pressée sur le clavier
        makeSound(event.key);
        buttonAnimation(event.key);
    })
})

// fonction par touche taper
function makeSound(key) {

    switch (key) {

        case "w":
            // son associé à la touche "w"
            let sound1 = new Audio("../sound/MUSCPerc_Caisseclaire1(ID2304)_LS.mp3");
            //son joué
            sound1.play();
            break;

        case "x":
            let sound2 = new Audio("../sound/MUSCPerc_Caisseclaire7(ID2310)_LS.mp3");
            sound2.play();
            break;

        case "c":
            let sound3 = new Audio("../sound/MUSCPerc_Tommedium1(ID2333)_LS.mp3");
            sound3.play();
            break;

        case "v":
            let sound4 = new Audio("../sound/MUSCPerc_Tomgrave3(ID2340)_LS.mp3");
            sound4.play();
            break;

        case "b":
            let sound5 = new Audio("../sound/MUSCPerc_Tomgrave4(ID2341)_LS.mp3");
            sound5.play();
            break;

        case "n":
            let sound6 = new Audio("../sound/MUSCPerc_Cymbale40cm4(ID2314)_LS.mp3");
            sound6.play();
            break;
    }
}


// Fonction pour opacité touche
function buttonAnimation(currentKey) {
    // 'élément du bouton actif en fonction de la touche pressée
    let activeButton = document.querySelector("." + currentKey);
    // w classe 'pressed' par exemple pour CSS bouton est pressé
    activeButton.classList.add("pressed");

    // Supprime la classe 'pressed' après un court délai de temp
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);
}