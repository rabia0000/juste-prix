// creation des balises images et du tableau des images

const imgChaise = document.createElement('img');
imgChaise.src = "chaise.png"
imgChaise.style = 'width: 250px';

const imgCostume = document.createElement("img");
imgCostume.src = "costume-haloween.png"
imgCostume.style = 'width: 250px';

const imgGrill = document.createElement("img");
imgGrill.src = "grill.png";
imgGrill.style = "width: 250px"

const imgGuitare = document.createElement("img");
imgGuitare.src = "guitare.png"
imgGuitare.style = "width: 250px"

const imgSac = document.createElement("img");
imgSac.src = "sac-a-main.png"
imgSac.style = "width: 250px"

const objetImage = [imgChaise, imgCostume, imgGrill, imgGuitare, imgSac]


// creation des noms de chaque objet et du tableau des noms

const nameChaise = document.createElement('p')
nameChaise.innerHTML = "Chaise"

const nameCostume = document.createElement('p')
nameCostume.innerHTML = "Costume"

const nameGrill = document.createElement('p')
nameGrill.innerHTML = "Grill"

const nameGuitare = document.createElement('p')
nameGuitare.innerHTML = "Guitare"

const nameSac = document.createElement('p')
nameSac.innerHTML = "Sac à main"

const displayNameObject = [nameChaise, nameCostume, nameGrill, nameGuitare, nameSac]

// affichage des images et leur noms aleatoirement : 

let indiceAleatoire = Math.floor(Math.random() * objetImage.length)
document.querySelector('#objet').appendChild(objetImage[indiceAleatoire])
document.querySelector('#objet').appendChild(displayNameObject[indiceAleatoire])


// programme guess price : 



// creation des variables nbAleatoire et nbTentative

let nbAleatoire = Math.trunc(Math.random() * 10) + 1
let score = 10;

let bouton = document.querySelector("#bouton")
let message = document.querySelector('#message')


bouton.addEventListener('click', function () {
    let prixPropose = Number(document.querySelector('#prix-propose').value);
    nbAleatoire;

    if (!prixPropose) {
        
        message.innerHTML = "Ce n'est PAS un NOMBRE 🛑"

    } else if (prixPropose === 0) {
        
        message.innerHTML = "l'article n'est pas gratuit 🤣"

    } else if (prixPropose === nbAleatoire) {


        message.innerHTML = "Le prix est correct félicitation ! "
        document.querySelector('body').style.backgroundColor = '#60b347'

    } else if (prixPropose > nbAleatoire) {

        score--;
        message.innerHTML = "Le prix est trop HAUT 📈"
    } else {
        score--;
        message.innerHTML = "Le prix est trop BAS 📉"
    }

})









