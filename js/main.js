var hasBeenClicked = false;

function formValidation(event) {
	if(hasBeenClicked == false) {
		alert("I AM ERROR");
		event.preventDefault();
		hasBeenClicked = true;
	} else {
		var values = {};
		$.each($('#myForm').serializeArray(), function(i, field) {
	    	values[field.name] = field.value;
		});
		console.log(values);
	}
}




