/* Script qui fait fonctionner la barre de recherche.
Il n'est pas terminé, au final il devrait être capable de selectionner les filtres parmis ceux de chaques destinations, et d'afficher ces dernières en fonction.
15/11/2020
Papa Birahim Seye
*/

window.onload = function() {

    var searchbar = document.getElementById("search_bar");


    searchbar.addEventListener("keydown", function(event) {

        if (event.keyCode === 13) {

            event.preventDefault();

            document.getElementById("search_button").click();
            console.log("1") //Verifie que la fonction marche
        }
    })
}