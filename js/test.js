let depart;

let retour;

let adultes;

let enfants;

let prix = 40;

function dateDifference() {

  depart = new Date(document.getElementById("depart").value).getTime();
retour = new Date(document.getElementById("retour").value).getTime();

console.log(depart);
console.log(retour);

numberOfDays = (retour - depart)/(1000*60*60*24);
  console.log(numberOfDays);

}


function total() {
    dateDifference();
  paragrahe = document.getElementById("prix");

  depart = document.getElementById("depart").value;

  retour = document.getElementById("retour").value;

  adultes = document.getElementById("adultes").value;

  enfants = document.getElementById("enfants").value;

  let prix_dejeuner

  if (document.getElementById("breakfast_yes").checked) {

    prix_dejeuner = 12 * adultes + 12 * enfants;

  } else if (document.getElementById("breakfast_no").checked) {

    prix_dejeuner = 0;

  }

  prix_total = adultes * prix + enfants * prix * 0.4 + prix_dejeuner;

  paragrahe.innerHTML = prix_total;

}
