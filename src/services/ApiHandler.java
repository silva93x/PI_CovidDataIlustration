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
	
	public String ApiCall(String country) {
		
		String data = null;
		String json = null;
		System.out.println("País Json " + country);
		try {
	         //Establish connection
	         URL url = new URL("https://api.covid19api.com/country/" + country);
	         URLConnection connection = url.openConnection();
	         connection.connect();
	         //Read data
	         //StringBuffer text = new StringBuffer();
	         InputStream is = connection.getInputStream();
	         BufferedReader br = new BufferedReader(new InputStreamReader(is));
	          
	         while((data = br.readLine()) != null){
            
                  //text.append(data + "\n"); 
                  json += data;
              }
	          
	      } catch (MalformedURLException e) {
	    	  
	         e.printStackTrace();
	         
	      } catch (IOException e) {
	    	  
	         e.printStackTrace();
	      }

		return json;
	}
	
}
