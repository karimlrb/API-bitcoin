const url = "https://blockchain.info/ticker";

// Créer une requête
let requete = new XMLHttpRequest(); //créartion de l'objet
requete.open("GET", url); // 1er para : GET / POST, 2ème para : url
requete.responseType = "json"; //Nous attendons su JSON
requete.send(); //Nous envoyons notre requête

// Dès qu'onreçoit une réponse, on execute une fonction
requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response; // On stock la réponse
      let prixEnEuro = reponse.EUR.last;
      document.getElementById("price_label").textContent = prixEnEuro;
    } else {
      alert("Un problème est intervenu, merci de revenir ultérieurement");
    }
  }
};
