window.addEventListener('load',function(){

  var searchbar = document.getElementById("search_bar");
  searchbar.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("search-button").click();
      console.log(searchbar.value);
      
      ;
    }
})

  


});

