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
 }

 class Destination {

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
    var  chaine, temp, a;

    chaine = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=a654b07e5d6cce84a26fac291d8863f7&units=metric'
    window.fetch(chaine)
        .then(res => res.json())
        .then(resJson => {
            a = resJson;
            temp = a['main']['temp'];
            console.log(temp)
        })

        return 1;
}

var place = data['lieux'];
var destinations = [];

for (var i = 0; i < place.length; i++) {
    let to_add = place[i]

    let temperature = meteo(place[i].nom)
    console.log(temperature);

    let add_destination = new Destination(to_add.nom, temperature, to_add.image, to_add.presentation, to_add.prix, to_add.filtre);
    destinations.push(add_destination);
}

for (var i = 0; i < destinations.length; i++){
    console.log(destinations[i].nom)    
}

var template = document.getElementById("destination").content;
    
for (var i = 0; i < destinations.length; i++) {

    var content = document.importNode(template, true);
    var link = content.querySelector(".link")
    var image = content.querySelector(".illustration")

    image.setAttribute("src", destinations[i]["image"]);
    image.setAttribute("alt", destinations[i]["nom"]);   
    link.setAttribute("href", "../HTML/reservation_form.html    ")

    content.querySelector(".description").textContent = destinations[i]["presentation"]

    document.getElementById("all").appendChild(content)
        
    }

}