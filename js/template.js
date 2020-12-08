/* Script qui s'occupe des templates et des fonctions qui les génèrent. 
06/12/2020
Papa Birahim Seye
*/

window.onload = function () {
data = {
    "lieux": [
       {
          "nom": "Dakar",
          "temperature": 0,
          "image": "../HTML/media/template",
          "presentation": "Voici Dakar",
          "prix": 40,
          "filtre": ["Chaleur", "Plage"]
       },
       {
          "nom": "Paris",
          "temperature": 0,
          "image": "../HTML/media/template",
          "presentation": "voici Paris",
          "prix": 40,
          "filtre": ["Chaleur", "Plage"]
       },
       {
         "nom": "Lyon",
         "temperature": 0,
         "image": "../HTML/media/template",
         "presentation": "voici Lyon",
         "prix": 40,
         "filtre": ["Chaleur", "Plage"]
      },
      {
         "nom": "Madrid",
         "temperature": 0,
         "image": "../HTML/media/template",
         "presentation": "voici Madrid",
         "prix": 40,
         "filtre": ["Chaleur", "Plage"]
      },
      {
         "nom": "Sao Paulo",
         "temperature": 0,
         "image": "../HTML/media/template",
         "presentation": "voici Sau Paulo",
         "prix": 40,
         "filtre": ["Chaleur", "Plage"]
      },
      {
         "nom": "Alger",
         "temperature": 0,
         "image": "../HTML/media/template",
         "presentation": "voici Alger",
         "prix": 40,
         "filtre": ["Chaleur", "Plage"]
      },
      {
         "nom": "Mexico",
         "image": "../HTML/media/template",
         "temperature": 0,
         "presentation": "voici Mexico",
         "prix": 40,
         "filtre": ["Chaleur", "Plage"]
      }
    ]
 } // Cette variable Json sert à stocker les différentes caractéristques des destinations

 class Destination {

    // Cette classe nous permettra de générer rapidement toutes les destinations mais aussi de garder leurs informations sans utiliser plusieurs listes grâce à la variable data.
    constructor(nom, temperature, image , presentation, prix, filtre) {

        this.nom = nom;
        this.temperature = temperature;
        this.image = image;
        this.presentation = presentation;
        this.prix = prix;
        this.filtre = filtre;
    }
}

function meteo(ville) {
    //Cette fonction, codée par Theo, récupère en ligne la température de la ville choisie puis la retourne.
    var  chaine, temp, a;

    chaine = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=a654b07e5d6cce84a26fac291d8863f7&units=metric'
    window.fetch(chaine)
        .then(res => res.json())
        .then(resJson => {
            a = resJson;
            temp = a['main']['temp'];
            console.log(temp)
        })

        return 1;// A modifier
}

var place = data['lieux']; //On recupère la liste des différentes destinations.
var destinations = []; // iniatialisation de la liste qui nous permettra de stocker les instances de la classe Destination.

for (var i = 0; i < place.length; i++) {

    let to_add = place[i] //Le i-ème élément de la liste place, qui contient les informations.

    let temperature = meteo(place[i].nom) // recuperation de la temperature grâce à la fonction meteo.
    console.log(temperature); // ***********On doit pouvoir affecter une temperature a chaque place************

    let add_destination = new Destination(to_add.nom, temperature, to_add.image, to_add.presentation, to_add.prix, to_add.filtre); //Création de l'objet.
    destinations.push(add_destination); //Ajout à la liste des destinati
}

/*for (var i = 0; i < destinations.length; i++){
    console.log(destinations[i].nom)    
}
*/

var template = document.getElementById("destination").content; //Récupération du modèle de template.
    
for (var i = 0; i < destinations.length; i++) {

    //On recupère d'abord tous les élements du template.
    var content = document.importNode(template, true);
    var link = content.querySelector(".link")
    var image = content.querySelector(".illustration")

    //Ensuite on leur associe les différentes variables pour vhaque destinations.
    image.setAttribute("src", destinations[i]["image"]);
    image.setAttribute("alt", destinations[i]["nom"]);   
    link.setAttribute("href", "../HTML/reservation_form.html    ")

    content.querySelector(".text").textContent = destinations[i]["presentation"]

    document.getElementById("all").appendChild(content) //Ajout de la description
        
    }

}