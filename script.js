$(document).ready(function(){
  //code goes here
  document.getElementById("myP").style.color = "magenta";
  
  
    $("#saveDestination").on("click", function(){
      
      let statusText = underConstruction("not ready");      //update the status
      $("#saveDestination").text(statusText).prop(   "disabled", true);
      
    });
  if (newDestination) {
      // If the input is not empty
      const destinationList = $("#destinationList"); // Get the list
      const newListItem = `<li><a href="#">${newDestination}</a></li>`; // Create a new list item
      destinationList.append(newListItem); // Add the new item to the list

      inputField.val(""); // Clear the input field
    } else {
      alert("Please enter a destination before adding!"); // Alert if input is empty
    }
    
    //pass a status (ready or not ready) and get back a message for user
    //rn, not ready 
    function underConstruction(status){
      return "not yet ready, bruh"
    };
  }
);
function filterDestinations() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('destinationList');
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those that don't match the search query. this is from w3schools
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}