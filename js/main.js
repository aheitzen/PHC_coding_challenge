console.log("I work");

function formValidation() {
	var x = document.forms["myForm"]["form_name"].value;
	if(x == null || x == "") {
		alert("I AM ERROR");
		return false;
	}
}