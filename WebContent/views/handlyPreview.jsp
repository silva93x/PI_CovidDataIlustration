<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.io.*"%>
<%@ page import="org.jfree.chart.*"%>
<%@ page import="org.jfree.chart.plot.*"%>
<%@ page import="org.jfree.data.general.*"%>
<%@ page import="org.jfree.data.category.DefaultCategoryDataset"%>
<%@ page import="org.jfree.data.xy.XYSeries"%>
<%@ page import="org.jfree.chart.ChartFactory"%>
<%@ page import="org.jfree.chart.JFreeChart"%>
<%@ page import="java.io.OutputStream"%>
<%@ page import="org.jfree.chart.ChartUtilities"%>
<%@ page import="org.jfree.data.xy.XYSeriesCollection"%>
<%@ page import="org.json.*"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="org.jfree.chart.plot.XYPlot"%>
<%@ page import="org.jfree.chart.renderer.xy.XYLineAndShapeRenderer"%>
<%@ page import="java.awt.Color"%>
<%@ page import="java.awt.BasicStroke"%>
<%@ page import="org.json.JSONArray"%>
<%@ page import="org.jfree.chart.ChartRenderingInfo"%>
<%@ page import="org.jfree.chart.entity.StandardEntityCollection"%>
<%@ page import="java.io.File"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Covid Data Ilustration</title>
</head>
<body>

	<%
	try{
		
		String jsonString = (String)session.getAttribute("jsonString");
		ArrayList<Integer> confirmed = new ArrayList<Integer>();
		ArrayList<Integer> deaths = new ArrayList<Integer>();
		ArrayList<Integer> recovered = new ArrayList<Integer>();

		if(!jsonString.equals("") && !jsonString.equals("[]")){
			
			JSONArray json = new JSONArray(jsonString);
			
			//Extracts data from json, since the data is cumulative, takes only the last day of the month
			for(int i = 0; i < json.length(); i++){
				
				if(json.getJSONObject(i).getString("Date").contains("2020-01-31")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-02-29")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-03-31")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-04-30")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-05-31")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-06-30")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-07-31")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-08-31")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-09-30")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-10-31")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-11-30")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				} else if(json.getJSONObject(i).getString("Date").contains("2020-12-15")){
					
					confirmed.add(json.getJSONObject(i).getInt("Confirmed"));
					deaths.add(json.getJSONObject(i).getInt("Deaths"));
					recovered.add(json.getJSONObject(i).getInt("Recovered"));
					
				}
			}
			//Series are prepared
			final XYSeries confirmedSerie = new XYSeries("Confirmed");
			confirmedSerie.add(1, confirmed.get(0));
			confirmedSerie.add(2, confirmed.get(1));
			confirmedSerie.add(3, confirmed.get(2));
			confirmedSerie.add(4, confirmed.get(3));
			confirmedSerie.add(5, confirmed.get(4));
			confirmedSerie.add(6, confirmed.get(5));
			confirmedSerie.add(7, confirmed.get(6));
			confirmedSerie.add(8, confirmed.get(7));
			confirmedSerie.add(9, confirmed.get(8));
			confirmedSerie.add(10, confirmed.get(9));
			confirmedSerie.add(11, confirmed.get(10));
			confirmedSerie.add(12, confirmed.get(11));

			final XYSeries deathsSerie = new XYSeries("Deaths");
			deathsSerie.add(1, deaths.get(0));
			deathsSerie.add(2, deaths.get(1));
			deathsSerie.add(3, deaths.get(2));
			deathsSerie.add(4, deaths.get(3));
			deathsSerie.add(5, deaths.get(4));
			deathsSerie.add(6, deaths.get(5));
			deathsSerie.add(7, deaths.get(6));
			deathsSerie.add(8, deaths.get(7));
			deathsSerie.add(9, deaths.get(8));
			deathsSerie.add(10, deaths.get(9));
			deathsSerie.add(11, deaths.get(10));
			deathsSerie.add(12, deaths.get(11));
			
			final XYSeries recoveredSerie = new XYSeries("Recovered");
			recoveredSerie.add(1, recovered.get(0));
			recoveredSerie.add(2, recovered.get(1));
			recoveredSerie.add(3, recovered.get(2));
			recoveredSerie.add(4, recovered.get(3));
			recoveredSerie.add(5, recovered.get(4));
			recoveredSerie.add(6, recovered.get(5));
			recoveredSerie.add(7, recovered.get(6));
			recoveredSerie.add(8, recovered.get(7));
			recoveredSerie.add(9, recovered.get(8));
			recoveredSerie.add(10, recovered.get(9));
			recoveredSerie.add(11, recovered.get(10));
			recoveredSerie.add(12, recovered.get(11));
			
			//Series are loaded
			final XYSeriesCollection dataset = new XYSeriesCollection();
			dataset.addSeries(confirmedSerie);
			dataset.addSeries(deathsSerie);
			dataset.addSeries(recoveredSerie);
			
			JFreeChart chart = ChartFactory.createXYLineChart(json.getJSONObject(0).getString("Country"), "Month", "Total number", dataset);
			
			//Each line on the graph is styled
			final XYPlot plot = chart.getXYPlot();
			XYLineAndShapeRenderer renderer = new XYLineAndShapeRenderer();
			renderer.setSeriesPaint(0, Color.RED);
			renderer.setSeriesPaint(1, Color.GREEN);
			renderer.setSeriesPaint(2, Color.YELLOW);
			renderer.setSeriesStroke(0, new BasicStroke(3.0f));
			renderer.setSeriesStroke(1, new BasicStroke(3.0f));
			renderer.setSeriesStroke(2, new BasicStroke(3.0f));
			plot.setRenderer(renderer);
			
			//Prepares the image and render it on the page
			try {
				
   	         	final ChartRenderingInfo info = new ChartRenderingInfo(new StandardEntityCollection());
   	         final File file1 = new File(getServletContext().getRealPath(".") + "/" + json.getJSONObject(0).getString("Country") + ".png");
   	         	ChartUtilities.saveChartAsPNG(file1, chart, 700, 600, info);
   	         %><img src="<%=json.getJSONObject(0).getString("Country")%>.png" WIDTH='700' HEIGHT='600' BORDER='0'><%
   	         	
   	        } catch (Exception e) {
   	            out.println(e);
   	        }
		} else{
			
				final XYSeriesCollection failDataset = new XYSeriesCollection();
				JFreeChart fail = ChartFactory.createXYLineChart("No se ha encontrado el país solicitado", "", "", failDataset);
			
				final ChartRenderingInfo info = new ChartRenderingInfo(new StandardEntityCollection());
	         	final File file1 = new File(getServletContext().getRealPath(".") + "/chart.png");
	         	ChartUtilities.saveChartAsPNG(file1, fail, 700, 600, info);
	         	%><img src="chart.png" WIDTH='700' HEIGHT='600' BORDER='0'><%
				
		}
		
	} catch(Exception e){
		
		e.printStackTrace();
	}
	
	%>

	<form id="toIndex" name="toIndex" method="post" action="index.jsp">
		<div>
			<input id="submitButton" type="submit" name="submitButton" value="Regresar a inicio">
		</div>
	</form>
</body>
</html>