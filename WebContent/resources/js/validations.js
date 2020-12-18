function validateForm(){

	var globalValidation = false;

	if(validateBothInputsLoaded()){

		globalValidation = true;
		
	} else{

		globalValidation = false;
		alert("Solo se pueden cargar los paises mediante una de las dos opciones");
	}

	if(globalValidation){

		if(validateBothInputsNotLoaded()){

			globalValidation = true;

		} else{

			globalValidation = false;
			alert("Debe rellenar al menos una de las dos opciones");
		}
	}

	if(globalValidation){
		console.log("XXXXXXXX");
		$("#myForm").submit();
	}
}

function validateBothInputsLoaded(){

	var validate = true;
	var input1 = $.trim($("#country").val());
	var input2 = $.trim($("#csvFile").val());
	input2 = input2.trim();

	if((input1 != "") && (input2 != "")){

		validate = false;
	}
	
	return validate;
}

function validateBothInputsNotLoaded(){

	var validate = true;
	var input1 = $.trim($("#country").val());
	var input2 = $.trim($("#csvFile").val());

	if((input1 == "") && (input2 == "")){

		validate = false;
	}
	
	return validate;
}