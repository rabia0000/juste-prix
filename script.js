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

// fonction perdu 
// function perdu (score){
//     if (score === 0) {
//         jeu = false;
//         message.innerHTML = " 😫 Vous avez perdu ! "
//         document.querySelector('body').style.backgroundColor = 'red'
//         bouton.classList.add('hidden')

//     }
// }



// creation des variables nbAleatoire et nbTentative
let bouton = document.querySelector("#bouton")
let message = document.querySelector('#message')
let afficheScore = document.querySelector('#nbre-tentative')
let jeu = true;

let nbAleatoire = Math.trunc(Math.random() * 10) + 1
 score = 10;





bouton.addEventListener('click', function () {
    if (jeu) {
        let prixPropose = Number(document.querySelector('#prix-propose').value);
        nbAleatoire;

        if (prixPropose === 0) {

            message.innerHTML = "l'article n'est pas gratuit 🤣"
            afficheScore.innerHTML = `ìl vous reste ${score} tentatives`
           

        } else if (prixPropose === nbAleatoire) {

            message.innerHTML = "Le prix est correct félicitation ! "
       
            document.querySelector('body').style.backgroundColor = '#60b347'

        } else if (prixPropose > nbAleatoire) {

            message.innerHTML = "Le prix est trop HAUT 📈"
            score--;
            afficheScore.innerHTML = `ìl vous reste ${score} tentatives`
            // perdu(score)

        } else {
            score--;
            message.innerHTML = "Le prix est trop BAS 📉"
            afficheScore.innerHTML = `ìl vous reste ${score} tentatives`
            // perdu(score)
        }

    }



    if (score === 0) {

        jeu = true;
        message.innerHTML = " 😫 Vous avez perdu ! "
        document.querySelector('body').style.backgroundColor = '#8a0c0c'
        bouton.style.display = 'none'
    }

})









