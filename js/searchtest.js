window.onload = function () {
    
    var searchbar = document.getElementById("search_bar");

        // Execute a function when the user releases a key on the keyboard
searchbar.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("search_button").click();
      console.log("VOila")
    }
  })}
