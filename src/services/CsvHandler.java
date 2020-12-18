package services;
//Import files
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
//This class handles the csv file the user load in the form
public class CsvHandler {

	public CsvHandler() {
		
	}
	//Handles csv file
	public ArrayList <String> processCsvFile(BufferedReader csvFile) throws IOException{
		
		ArrayList <String> countriesList = new ArrayList <String>();
		ArrayList <String> jsonList = new ArrayList <String>();
		
		String line = null;
		
		while ((line = csvFile.readLine()) != null) {
			
			line = csvToFormat(line);
		    String[] data = line.split(",");
		    
		    for(int i = 0; i < data.length; i++) {
		    	
		    	countriesList.add(data[i]);
		    }
		}
		
		jsonList = buildJsonList(countriesList);
		
		return jsonList;
	}
	//Builds a list with the json of each country
	public ArrayList <String> buildJsonList(ArrayList <String> countriesList){
		
		ArrayList <String> jsonList = new ArrayList <String>();
		ApiHandler ah = new ApiHandler();
		Utils u = new Utils();
		String stringFormated = "";
		
		for(int i = 0; i< countriesList.size(); i++) {
			
			stringFormated = u.stringFormat(countriesList.get(i));
			jsonList.add(ah.ApiCall(stringFormated));
		}
		
		return jsonList;
	}
	//Applies format to csv file line
	public String csvToFormat(String string) {
		
		string = string.replace(";", ",");
		string = string.replace(".", ",");
		string = string.replace(":", ",");
		string = string.replace("-", ",");
		
		return string;
	}
}
