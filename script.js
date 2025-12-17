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
        const descris = document.createElement("p");
        //console.log (avantage):;

        descris.textContent = avantage;
        avantage1.appendChild(descris);

    });

}


function displayProducts(data) {
    let produits = data.produits;
    data.forEach(produits => {
        const article = document.createElement("article");
        article.classlist.add("produit");
        const title = document.createElement("h3");
        const descris = document.createElement("p");
        const image = document.createElement("img");


        title.textContent = produits.nom;
        descris.textContent = produits.description;



        console.log(produits)['image_url'];
        image.src = produits['image url'];



        article.appendChild(title);
        article.appendChild(descirs);
        article.appendChild(image);

        function displayProducts(data) {

        }

        function displayServices(data) {

            let services = data.services;

            services.forEach(services => {
                const servicesclients = document.createElement("article");
                servicesclients.classList.add("produit");
                const title = document.createElement("h3");
                const descris = document.createElement("p");




                title.textContent = services.nom;
                descri.textContent = services.description;



                servicesclients.appendChild(title);
                servicesclients.appendChild(descri);

                service1.appendChild(servicesclients);


                function displayTemoignage(data) {
                    let temoignages = data.temoignages;
                    temoignages.forEach(temoignage => {
                        const nomclient = document.createElement("h4");
                        nonclient.textContent = temoignage.prenom;

                        const commente = document.createElement("p");
                        commente.textContent = temoignage.commentaire;

                        const experience = document.createElement("p");
                        experience.textContent =

                            temoignage.typeExperience;
                        const note = document.createElement("p");

                        note.textContent = 
                    })}})}
                    