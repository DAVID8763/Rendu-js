//Etappe 1 {Html} crée les ID 
  

//Etappe 2 {javasc} crée les card à partir du Html


//Etappe 3 quels son les elements javascript et html


// Etappe 4 

//fetch button
const avantage1 = document.getElementById("Avantage");

const shop1 = document.getElementById("Shop");

const temoignage1 = document.getElementById("Temoignage");

const services = document.getElementById("Services");


const API_URL = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json"




fetch(API_URL)
.then(reponse => reponse.json())
.then(data => {
    console.log('Données récupées avec succès :', data);

    console.log(data.produits);
    

    displayAvantage(data);
    displayShop(data);
    displayTemoignage(data);
    displayServices(data);
})


function displayAvantage(data) {
    let avantages = data.avantagesclients;
    console.log(avantage);

    avantages.forEach(avantage => {
        
    });
    
}
