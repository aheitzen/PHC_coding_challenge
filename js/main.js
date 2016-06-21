console.log("I work");

$(document).ready(function(){
	$("#submit_button").trigger(function(event){
		event.preventDefault();
    	alert("I AM ERROR");
		return true;
        
    });


$("#submit_button").submit(function() {
	console.log("form")
})
});





// function formValidation() {
// 	var x = document.forms["myForm"]["form_name"].value;
// 	if(x == null || x == "") {
// 		alert("Whoa Tiger, did you fill out all the forms?");
// 		return false;
// 	}
// }