<!DOCTYPE html>
<meta charset="utf-8">
<html>
<head>
	<title>Portada</title>
	<!--<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/bootstrap-grid.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/bootstrap-reboot.min.css">-->
</head>
<body>
	<g:form name="upload text inputs" action="UrlMappings/dataFromForm2" method="post">
		<span>Elige cómo cargar el listado de países</span>
		<fieldset>
			<legend>Cargado manual</legend>
			<g:textField type="text" name="country">
			<g:submitButton name="submit" value="Confirmar"/>
		</fieldset>
	</g:form>	
	<g:uploadForm name="upload csv file" action="UrlMappings/dataFromForm" method="post">
		<fieldset>
			<legend>Documento CSV</legend>
			<input type="file" name="myFile" />
			<g:submitButton name="submit" value="Confirmar"/>
		</fieldset>
	</g:uploadForm>

	<script type="text/javascript">
		
	</script>

	<!--<script type="text/javascript" src="resources/js/jquery.js"></script>
	<script type="text/javascript" src="resuources/js/popper.js"></script>
	<script type="text/javascript" src="resuources/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="resuources/js/bootstrap.bundle.min.js"></script>-->
</body>
</html>