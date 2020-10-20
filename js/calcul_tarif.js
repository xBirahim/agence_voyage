window.addEventListener("load", function () {

});
let depart;
let retour;
let adultes;
let enfants;
let duration;
let prix = 40;


function dateVerification() {

  var depart_element = document.getElementById("depart");
  var retour_element = document.getElementById("retour");

  retour_element.addEventListener("keyup", function (event) {

    console.log("test")

    if (retour > depart) {
      retour_element.setCustomValidity("La date de retour est trop proche !")
      console.log("Date invalide")

    } else {
      retour_element.setCustomValidity("")
    }

  });
}
function dateDifference() {

  depart = new Date(document.getElementById("depart").value).getTime();
  retour = new Date(document.getElementById("retour").value).getTime();

  console.log("diff", retour - depart)

  numberOfDays = (retour - depart) / (1000 * 60 * 60 * 24);
  console.log(numberOfDays);

  return numberOfDays;

}

function total() {

  duration = dateDifference();
  console.log("Durée", duration);
  console.log("Prix", prix);

  paragrahe = document.getElementById("prix");
  depart = document.getElementById("depart").value;
  retour = document.getElementById("retour").value;
  adultes = document.getElementById("adultes").value;
  enfants = document.getElementById("enfants").value;

  let prix_dejeuner

  if (document.getElementById("breakfast_yes").checked) {
    prix_dejeuner = duration * 12 * adultes +  duration * 12 * enfants;
  }
  else if (document.getElementById("breakfast_no").checked) {
    prix_dejeuner = 0;
  }

  prix_total = (adultes * (prix * duration) + enfants * 0.4 + prix_dejeuner);
  console.log(prix_total);
  paragrahe.innerHTML = prix_total;

}

window.onchange = function () {

  total()

}