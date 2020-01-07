function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("chk");
  // Get the output text
  var menu = document.getElementById("mm");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}