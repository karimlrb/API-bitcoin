const url = "https://blockchain.info/ticker";

// function prixActuelleBitcoin() {
//   // Créer une requête
//   let requete = new XMLHttpRequest(); //créartion de l'objet
//   requete.open("GET", url); // 1er para : GET / POST, 2ème para : url
//   requete.responseType = "json"; //Nous attendons su JSON
//   requete.send(); //Nous envoyons notre requête

//   // Dès qu'onreçoit une réponse, on execute une fonction
//   requete.onload = function () {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response; // On stock la réponse
//         let prixEnEuro = reponse.EUR.last;
//         document.getElementById("price_label").textContent = prixEnEuro;
//       } else {
//         alert("Un problème est intervenu, merci de revenir ultérieurement");
//       }
//     }
//   };
// }
// setInterval(prixActuelleBitcoin, 1000);

// const url1 = "https://lesoublisdelinfo.com/api.php";

// GET
// let requete1 = new XMLHttpRequest();
// requete1.open("GET", url1);
// requete1.responseType = "json";
// requete1.send();

// POST
// requete1.open("POST", url1);
// requete1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// requete1.responseType = "json";
// requete1.send("prenom=karim");

// requete1.onload = function () {
//   if (requete1.readyState === XMLHttpRequest.DONE) {
//     if (requete1.status === 200) {
//       let reponse1 = requete1.response;
//       console.log(reponse1);
//     } else {
//       alert("Un problème est intervenu, merci de revenir ultérieurement");
//     }
//   }
// };

async function recupererPrix() {
  const requete = await fetch(url, {
    method: "GET",
  });

  if (!requete.ok) {
    alert("Un problème est surevenu");
  } else {
    let donnees = await requete.json();
    // console.log(donnees);
    let prixEnEuro = donnees.EUR.last;
    document.getElementById("price_label").textContent = prixEnEuro;
  }
}

recupererPrix();
