var hasBeenClicked = false;

function formValidation(event) {
	if(hasBeenClicked == false) {
		alert("I AM ERROR");
		event.preventDefault();
		hasBeenClicked = true;
		console.log(event);
	}
}