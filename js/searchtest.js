window.onload = function () {

    var searchbar = document.getElementById("search_bar");


    searchbar.addEventListener("keydown", function (event) {

        if (event.keyCode === 13) {

            event.preventDefault();

            document.getElementById("search_button").click();
            console.log("VOila")
        }
    })
}
