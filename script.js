const avantage1 = document.getElementById("Avantage");
const shop1 = document.getElementById("Shop");
const temoignage1 = document.getElementById("Temoignage");
const services1 = document.getElementById("Services");

const API_URL = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json";

fetch(API_URL)
    .then(reponse => reponse.json())
    .then(data => {
        console.log('Données récupérées avec succès :', data);

        displayProducts(data);
        displayTemoignage(data);
        displayServices(data);
    })
    .catch(error => console.error("Erreur fetch :", error));

function displayAvantage(data) {
    let avantages = data.avantagesclients;
    avantages.forEach(avantage => {
        const p = document.createElement("p");
        p.textContent = avantage;
        avantage1.appendChild(p);
    });
}

function displayProducts(data) {
    // let produits = data.produits;
    // console.log(produits);
    
    data.plats.forEach(produit => {
        const article = document.createElement("article");
        article.classList.add("produit");

        const title = document.createElement("h3");
        title.textContent = produit.nom;

        const descris = document.createElement("p");
        descris.textContent = produit.description;

        const image = document.createElement("img");
        image.src = produit["image-url"];
        image.alt = produit.nom;

        article.appendChild(title);
        article.appendChild(descris);
        article.appendChild(image);

        shop1.appendChild(article);
    });
}

function displayServices(data) {
    let services = data.services;
    services.forEach(service => {
        const article = document.createElement("article");
        article.classList.add("produit");

        const title = document.createElement("h3");
        title.textContent = service.nom;

        const descris = document.createElement("p");
        descris.textContent = service.desc;

        article.appendChild(title);
        article.appendChild(descris);

        services1.appendChild(article);
    });
}

function displayTemoignage(data) {
    let temoignages = data.temoignages;
    temoignages.forEach(temoignage => {
        const div = document.createElement("div");
        div.classList.add("temoignage");

        const nomclient = document.createElement("h4");
        nomclient.textContent = temoignage.prenom;

        const commentaire = document.createElement("p");
        commentaire.textContent = temoignage.commentaire;

        const experience = document.createElement("p");
        experience.textContent = temoignage.typeExperience;

        const note = document.createElement("p");
        note.textContent = `Note : ${temoignage.note || "N/A"}`;

        div.appendChild(nomclient);
        div.appendChild(commentaire);
        div.appendChild(experience);
        div.appendChild(note);

        temoignage1.appendChild(div);
    });
}

                