// exo1 fait

// les variables
let exo1 = document.querySelector("#content")
let pexo1 = document.querySelector("p");
let h1exo1 = document.querySelector("h1");
let h2exo1 = document.querySelector("h2");

// lancement du programe
exo1.addEventListener("click", function(e){
    exo1.className = "bordure"
    pexo1.className = "txtred"
    h1exo1.className = "surlingeh1"
    h2exo1.innerHTML = h2exo1.innerHTML.substring(0, h2exo1.innerHTML.length - 1)
})

// _________________________________________________________________________________________


// exo2 fait

// les variables
let texte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
let section1 = document.querySelector("section")
let textebase = section1.firstElementChild.innerHTML


// lancement du programe
section1.addEventListener("mouseover", function(){
    section1.firstElementChild.innerHTML = texte
})
section1.addEventListener("mouseout", function(){
    section1.firstElementChild.innerHTML = textebase
})



