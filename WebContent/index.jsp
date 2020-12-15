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
    
    body{
     background-color: lightyellow;
     display: flex;
    }
    .myContainer{
     height: 100%;
     width: 99%;
    }
    .myFooter{
     bottom: 0;
     display: float;
     position: fixed;
     height: 9%;
     width: 100%;
     background-color: lightcyan;
     margin-left: 0%;
     margin-right: 0%;
    }
    .formRow{
     padding-top: 15%;
     padding-bottom: 27%;
    }

    form{
     padding: 12%;
     border: solid 2px #000000;
     background-color: lightcyan;
    }
    .margin_top{
     margin-top: 20px;
    }
    h2{
     position: absolute;
     width: 100%;
     text-align:center;
    }
    span{
     font-size: 18px;
    }
    .font1{
     font-size: 20px;
     font-style: italic;
    }
    .font2{
     font-size: 28px;
     font-weight: bold;
    }
</style>
</head>
<body>
	<div class="myContainer">
		<div class="row formRow justify-content-center">
			<div class="col"></div>
			<div class="col-5 align-self-center">
				<div>
					<span>¿Cómo desea insertar los nombres de los países?</span>
				</div>
				<form name="form1" method="post" action="FormController">
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
						<input type="submit" name="submit" value="Solicitar">
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
				<p>Covid Data Ilustration</p>
			</div>
			<div class="col-3 d-flex justify-content-end align-items-end font1">
				<p>V1.0</p>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="WebContent/resources/bootstrap/js/jquery.js"></script>
	<script type="text/javascript" src="resources/bootstrap/js/popper.js"></script>
	<script type="text/javascript" src="resources/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="resources/bootstrap/js/bootstrap.bundle.min.js"></script>
	
	<script type="text/javascript">

	</script>	
</body>
</html>