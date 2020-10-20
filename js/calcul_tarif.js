var depart = document.getElementById("depart");

var retour = document.getElementById("retour");

var adultes = document.getElementById("adultes");

var enfants = document.getElementById("enfants");

var prix_journalier = 40;

function dateDifference() {

depart = new Date(depart.value).getTime();
retour = new Date(retour.value).getTime();

numberOfDays = (retour - depart)/(1000*60*60*24);
console.log(numberOfDays);

}


function total() {

      dateDifference();

    paragrahe = document.getElementById("prix");

    var prix_dejeuner;

    if (document.getElementById("breakfast_yes").checked) {

    prix_dejeuner = 12 * adultes + 12 * enfants;

  } else if (document.getElementById("breakfast_no").checked) {

    prix_dejeuner = 0;

  }

  prix_total = adultes.value * prix + enfants.value * prix_journalier * 0.4 + prix_dejeuner;

  paragrahe.innerHTML = prix_total;

}
