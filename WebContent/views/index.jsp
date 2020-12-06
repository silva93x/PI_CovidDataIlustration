<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Covid data ilustration</title>
	<!--<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/bootstrap-grid.min.css">
	<link rel="stylesheet" type="text/css" href="resources/css/bootstrap-reboot.min.css">-->
</head>
<body bgcolor="lightcyan">

	<form name="form1" method="post" action="FormController">
		<div>
			<label for="country">Nombre país:</label>
		</div>
		<div>
			<input type="text" name="country" id="country">
		</div>
		<div>
			<label for="csvFile">Archivo .csv:</label>
		</div>
		<div>
			<input type="file" accept=".csv" name="csvFile" id="csvFile">
		</div>
		<div>
			<input type="submit" name="submit" value="Solicitar">
		</div>
	</form>

<!--<script type="text/javascript" src="resources/js/jquery.js"></script>
	<script type="text/javascript" src="resuources/js/popper.js"></script>
	<script type="text/javascript" src="resuources/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="resuources/js/bootstrap.bundle.min.js"></script>-->
<script type="text/javascript">

</script>	
</body>
</html>