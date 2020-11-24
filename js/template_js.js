window.onload = function () {

    data = {
        "lieux": [
           {
              "nom": "Dakar",
              "image": "../HTML/media/template",
              "desc": "Voici Dakar"
           },
           {
              "nom": "Paris",
              "image": "../HTML/media/template",
              "desc": "voici paris"
           }
        ]
     }

    var lieux = data['lieux']
    var template = document.getElementById("destination").content;
    

    for (var i = 0; i < lieux.length; i++) {

        var content = document.importNode(template, true);
        var link = content.querySelector(".link")
        var image = content.querySelector(".illustration")

        image.setAttribute("src", lieux[i]["image"]);
        image.setAttribute("alt", lieux[i]["nom"]);   
        link.setAttribute("href", "../HTML/reservation_form.html    ")

        content.querySelector(".description").textContent = lieux[i]["desc"]

        document.getElementById("liste").appendChild(content)

        console.log(lieux[i]["desc"])
        
    }

}

