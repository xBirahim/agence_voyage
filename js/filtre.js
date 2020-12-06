/* js gerant le trie des produits 
fait le 06/12/2020
Theo Pannethier
*/
window.addEventListener("load", function () { // permet au chargement de la page d'avoir tout les produits affichés
tout()
});
function tout() { //fonction qui permet d'afficher tout les produits (pour l'ouverture de la page)
    var x;
    x = document.getElementsByClassName("trie"); //on recupere les valeurs dans les elements de classe trie
    for (i = 0; i < x.length; i++) { // boucle qui parcours x
        console.log("testfor");
        var liste = x[i].className.split(" "); //on obtient un liste des parametre de la classe
        if (liste[liste.length - 1] != "show") { // on verifie que show n'est pas deja present
            x[i].className = x[i].className + " show"; //on rajoute à la liste show qui permet de l'afficher avec CSS
        }

    }

}


function del(y) { // fonction qui ne concerve que les elements qui possedes y dans leurs classe
    var x;
    x = document.getElementsByClassName("trie"); //on recupere les valeurs dans les elements de classe trie
    for (i = 0; i < x.length; i++) {// boucle qui parcours x
        var listeTest = x[i].className.split(" ") //liste des parametres de la classe 
        if (listeTest.includes(y) != true) { // verification de l'inclusion ou non de y dans la classe
            if (listeTest[listeTest.length - 1] == "show") { //on cache les elements non voulus
                x[i].className = (x[i].className.split(" show")[0]);
            }

        }
        else {
            if (listeTest[listeTest.length - 1] != "show") { //on affiche les elements voulus
                console.log("test if");
                x[i].className = x[i].className + " show";
            }

        }

    }
}