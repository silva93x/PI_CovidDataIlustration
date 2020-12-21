<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Covid data ilustration</title>
<style type="text/css">
    <%@include file="resources/bootstrap/css/bootstrap.min.css" %>
    <%@include file="resources/bootstrap/css/bootstrap-grid.min.css" %>
    <%@include file="resources/bootstrap/css/bootstrap-reboot.min.css" %>
    <%@include file="resources/css/main.css" %>
</style>
</head>
<body>
	<div class="myContainer">
		<div class="row myHeader">
			<div class="col-3 d-flex justify-content-start align-items-end font1">
				<p></p>
			</div>
			<div class="col-6 d-flex justify-content-center align-items-center font2">
				<p>Covid Data Ilustration</p>
			</div>
			<div class="col-3 d-flex justify-content-end align-items-end font1">
				<p></p>
			</div>
		</div>
		<div class="row formRow justify-content-center">
			<div class="col"></div>
			<div class="col-5 align-self-center">
				<div>
					<span>¿Cómo desea insertar los nombres de los países?</span>
				</div>
				<form id="myForm" name="myForm" method="post" action="FormController">
					<div>
						<label for="country">Introducir manualmente:</label>
					</div>
					<div>
						<input class="form-control" type="text" name="country" id="country">
					</div>
					<div class="margin_top">
						<label for="csvFile">Mediante archivo .csv:</label>
					</div>
					<div>
						<input class="form-control" type="file" accept=".csv" name="csvFile" id="csvFile">
					</div>
					<div class="margin_top d-flex justify-content-end">
						<input id="submitButton" type="button" name="submitButton" value="Solicitar">
					</div>
				</form>
			</div>
			<div class="col"></div>
		</div>
		<div class="row myFooter">
			<div class="col-3 d-flex justify-content-start align-items-end font1">
				<p>@2020 Silvax Solutions</p>
			</div>
			<div class="col-6 d-flex justify-content-center align-items-center font2">
				<p></p>
			</div>
			<div class="col-3 d-flex justify-content-end align-items-end font1">
				<p>V1.0</p>
			</div>
		</div>
	</div>
		
	<script type="text/javascript" src="resources/bootstrap/js/jquery.js"></script>
	<script type="text/javascript" src="resources/bootstrap/js/popper.js"></script>
	<script type="text/javascript" src="resources/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="resources/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript" src="resources/js/validations.js"></script>
	
	<script type="text/javascript">

		$(document).ready(function(){

			$("#submitButton").on("click", validateForm);

		});
	
	</script>
</body>
</html>