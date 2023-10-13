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
imgGuitare.style = "width: 300px "

const imgSac = document.createElement("img");
imgSac.src = "sac-a-main.png"
imgSac.style = "width: 200px"

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
audioGenerique = document.querySelector('#audio1')
audioDing = document.querySelector('#audio1')
audioBuzz = document.querySelector('#audio3')

let jeu = true;
let nbAleatoire = Math.trunc(Math.random()*100) +1
score = 10;


bouton.addEventListener('click', function () {
    if (jeu) {
        let prixPropose = Number(document.querySelector('#prix-propose').value);
        nbAleatoire;
        console.log(nbAleatoire)
        afficheScore.innerHTML = `Vous avez ${score} tentatives`
        if (prixPropose === 0) {

            message.innerHTML = "l'article n'est pas gratuit 🤣"
            afficheScore.innerHTML = `Il vous reste ${score} tentatives`
           

        } else if (prixPropose === nbAleatoire) {

            message.innerHTML = "Le prix est correct félicitation ! "
       
            document.querySelector('body').style.backgroundColor = '#60b347'
            audioGenerique.play();

        } else if (prixPropose < nbAleatoire) {

            message.innerHTML = "C'est plus ! 📈"
            score--;
            afficheScore.innerHTML = `Il vous reste ${score} tentatives`
            audioBuzz.play()
            // perdu(score)

        } else  if (prixPropose > nbAleatoire){
           
            message.innerHTML = "C'est moins !  📉"
            score--;
            afficheScore.innerHTML = `Il vous reste ${score} tentatives`
            audioBuzz.play()
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









