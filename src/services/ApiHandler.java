package services;
//Import files
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
//This class make the calls to the api
public class ApiHandler {

	public ApiHandler() {
		
	}
	
	//Calls the api and receives the json
	public String ApiCall(String country) {
		
		String data = null;
		String json = "";
		
		try {
	         //Establish connection
	         URL url = new URL("https://api.covid19api.com/country/" + country);       
	         URLConnection connection = url.openConnection();
	         connection.connect();
	         
	         //Read data
	         InputStream is = connection.getInputStream();
	         BufferedReader br = new BufferedReader(new InputStreamReader(is));
	          
	         while((data = br.readLine()) != null){
            
                  json += data;
              }
	         
	         br.close();
	          
	      } catch (MalformedURLException e) {
	    	  
	    	  return json;
	         
	      } catch (IOException e) {
	    	  
	    	  return json;
	         
	      }

		return json;
	}
	
}
