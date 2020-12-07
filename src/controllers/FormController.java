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


/**
 * This servlet controls the user's login to validate it and start the session
 */
@WebServlet("/FormController")
public class FormController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormController() {
        super();
        // TODO Auto-generated constructor stub
    }

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
    		csvFile.close();
    		
    	} else {
    		
    		
    	}
    	
    	
	}

}