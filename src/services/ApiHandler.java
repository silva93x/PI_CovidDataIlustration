package services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;

public class ApiHandler {

	public ApiHandler() {
		
	}
	
	public ArrayList<String> buildJson(String countries) {
		
		ArrayList<String> jsonReceived = new ArrayList<String>();
		
		
		String countryData = "";
		
		ApiCall(countryData);
		
		return jsonReceived;
	}
	
	public String ApiCall(String countryData) {
		
		try {
	         // Se abre la conexión
	         URL url = new URL("https://api.covid19api.com/country/" + countryData);
	         URLConnection connection = url.openConnection();
	         connection.connect();
	         
	         // Lectura
	         StringBuffer text = new StringBuffer();
	         InputStream is = connection.getInputStream();
	         BufferedReader br = new BufferedReader(new InputStreamReader(is));
	         String data = br.readLine();
	          
	         while(data != null){
            
                  text.append(data + "\n"); 
                  data = br.readLine();
              }
	          
	      } catch (MalformedURLException e) {
	    	  
	         // TODO Auto-generated catch block
	         e.printStackTrace();
	         
	      } catch (IOException e) {
	    	  
	         // TODO Auto-generated catch block
	         e.printStackTrace();
	      }
		
		String xxx = "";
		return xxx;
	}
	
}
