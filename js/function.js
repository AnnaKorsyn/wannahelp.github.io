// Get modalCompanies
var modalCompanies = document.getElementById('companiesModal');

// Get <spanCompanies> element that closes the modalCompanies
var spanCompanies = document.getElementsByClassName("close")[0];
var modcontent = document.getElementById("modcontent");
// When user clicks on the button, open the modalCompanies 


function bntOnClick() {
	modalCompanies.style.display = "flex";
}

// When user clicks on <spanCompanies> (x), close modalCompanies
spanCompanies.onclick = function() {
    modalCompanies.style.display = "none";
}

// When user clicks anywhere outside of the modalCompanies, close it

window.addEventListener("click", function(event) {	
	if (event.target == modalCompanies) {
  	  modalCompanies.style.display = "none";
	}	
})
