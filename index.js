const url = "https://blockchain.info/ticker";

// Créer une requête
let requete = new XMLHttpRequest(); //créartion de l'objet
requete.open("GET", url); // 1er para : GET / POST, 2ème para : url
requete.responseType = "json"; //Nous attendons su JSON
requete.send(); //Nous envoyons notre requête
