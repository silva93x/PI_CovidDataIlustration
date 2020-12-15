package services;
//Import files
import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;

public class CsvHandler {

	public CsvHandler() {
		
	}
	
	public ArrayList <String> extractLines(BufferedReader csvFile) throws IOException{
		
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
	
	public ArrayList <String> buildJsonList(ArrayList <String> countriesList){
		
		ArrayList <String> jsonList = new ArrayList <String>();
		ApiHandler ah = new ApiHandler();
		
		for(int i = 0; i< countriesList.size(); i++) {
			System.out.println("País " + i + " " + countriesList.get(i));
			jsonList.add(ah.ApiCall(countriesList.get(i)));
		}
		System.out.println("JsonList " + jsonList.get(1));
		return jsonList;
	}
	
	public String csvToFormat(String string) {
		
		string = string.replace(";", ",");
		string = string.replace(".", ",");
		string = string.replace(":", ",");
		string = string.replace("-", ",");
		
		return string;
	}
}
