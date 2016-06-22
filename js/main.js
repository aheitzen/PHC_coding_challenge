var hasBeenClicked = false;

function formValidation(event) {
	if(hasBeenClicked == false) {
		alert("I AM ERROR");
		// console.log($('#myForm').val());
		event.preventDefault();
		hasBeenClicked = true;
		// console.log(event);

	}
}

$( "form" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});

