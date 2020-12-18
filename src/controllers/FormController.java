package controllers;
//Import files
import java.io.BufferedReader;

import java.io.FileReader;
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

import services.CountryNameHandler;
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
    CountryNameHandler cnh = new CountryNameHandler();
    
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
		HttpSession session=request.getSession(); 
		RequestDispatcher requestDispatcher;
		
		String country = request.getParameter("country").trim();
		String csvFileReceived = request.getParameter("csvFile");	
    	
    	if(country == "" && csvFileReceived == "") {
    		
    		out.print("<h2 style=\"color:#FF0000\">Debe introducir los nombres manualmente o mediante archivo .csv</h2> <br/><br/>");
    		requestDispatcher = request.getRequestDispatcher("/index.jsp");
    		requestDispatcher.include(request, response);
    		
    	} else if(country != "" && csvFileReceived != "") {
    		
    		out.print("<h2 style=\"color:#FF0000\">Debe elegir un método unicamente, no es posible ambos</h2> <br/><br/>");
    		requestDispatcher = request.getRequestDispatcher("/index.jsp");
    		requestDispatcher.include(request, response);
    		
    	} else if(csvFileReceived != "") {
    		
    		BufferedReader csvFile = new BufferedReader(new FileReader(csvFileReceived));
    		ArrayList<String> jsonListString = new ArrayList<String>();
    		
    		try {
    			
				jsonListString = ch.processCsvFile(csvFile);
				
			} catch (IOException e) {
				
				e.printStackTrace();
				
			} finally{
			
				csvFile.close();
			}
    		
    		 
            session.setAttribute("jsonListString",jsonListString);  
            requestDispatcher = request.getRequestDispatcher("/views/csvPreview.jsp");
    		requestDispatcher.include(request, response);
    
    	} else {
    		
    		String jsonString = cnh.buildJson(country);

    		session.setAttribute("jsonString",jsonString);  
            requestDispatcher = request.getRequestDispatcher("/views/handlyPreview.jsp");
    		requestDispatcher.include(request, response);
    	}	
    	
	}

}