package controllers;
import java.io.FileReader;
//Import files
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import services.ApiHandler;
import services.CsvHandler;


/**
 * This servlet controls the application operation
 */
@WebServlet("/FormController")
public class FormController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormController() {
        super();
    }
    //Object instantiation
    CsvHandler ch = new CsvHandler();
    ApiHandler ah = new ApiHandler();

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		
		//Objects and variables
		PrintWriter out = response.getWriter();
		RequestDispatcher requestDispatcher;
		
		String country = request.getParameter("country").trim();
		String csvFileReceived = request.getParameter("csvFile").trim();
		csvFileReceived = csvFileReceived.replace(";", ",");
    	
    	if(country == "" && csvFileReceived == "") {
    		
    		out.print("<h2 style=\"color:#FF0000\">Debe introducir los nombres manualmente o mediante archivo .csv</h2> <br/><br/>");
    		requestDispatcher = request.getRequestDispatcher("/index.jsp");
    		requestDispatcher.include(request, response);
    		
    	} else if(country != "" && csvFileReceived != "") {
    		
    		out.print("<h2 style=\"color:#FF0000\">Debe elegir un método unicamente, no es posible ambos</h2> <br/><br/>");
    		requestDispatcher = request.getRequestDispatcher("/index.jsp");
    		requestDispatcher.include(request, response);
    		
    	} else if(csvFileReceived != "") {
    		
    		CSVReader csvFile = new CSVReader(new FileReader(csvFileReceived));
    	
    		try {
    			
				ch.extractLines(csvFile);
				
			} catch (CsvValidationException | IOException e) {
				
				e.printStackTrace();
			}
    		
    		csvFile.close();
    		
    	} else {
    		
    		
    	}
    	
    	
	}

}