function meteo(ville) {
    var  chaine, temp, a;

    chaine = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=a654b07e5d6cce84a26fac291d8863f7&units=metric'
    window.fetch(chaine)
        .then(res => res.json())
        .then(resJson => {
            a = resJson;
<<<<<<< HEAD
            temp = a['main']['temp'] + '°C';
            document.getElementById(ville).innerHTML = temp

=======
            temp = a['main']['temp'];
            return temp;
>>>>>>> 26ad89e73be13ab52f2278e030d36159db878d2d
        })
}