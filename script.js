//selecting html element
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message')
let submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', function(e){
	e.preventDefault();

	//getting user entered value
	let emailValue = emailElement.value;
	let messageValue = messageElement.value;
	
	//javascript validations
	if(emailValue.includes('@')){
		alert('Thank you')
	} else {
		alert('That does not look like a valid email address, please try again.')
	}
	

})

//attaching 'click listener'
//console.log('Email:',emailValue)
//console.log('Message:',messageValue)




