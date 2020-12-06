function meteo(ville) {
    var  chaine, temp, a;

    chaine = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=3f03a1aebaf64441ca2a0cc3ad826819&units=metric'
    window.fetch(chaine)
        .then(res => res.json())
        .then(resJson => {
            a = resJson;
            temp = a['main']['temp'];
            document.getElementById(ville).innerHTML = temp

        })
    window.onload(meteo())
}