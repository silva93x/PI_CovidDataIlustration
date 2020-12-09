package services;

import java.io.IOException;
import java.util.ArrayList;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

public class CsvHandler {

	public CsvHandler() {
		
	}
	
	public ArrayList <String> extractLines(CSVReader csvFile) throws CsvValidationException, IOException{
		
		ArrayList <String> countriesList = new ArrayList <String>();
		ArrayList <String> jsonList = new ArrayList <String>();
		
		String[] line = null;
		while((line = csvFile.readNext()) != null) {

			for(int i = 0; i<= line.length; i++) {
				
				countriesList.add(line[i]);
			}
		}
		
		jsonList = buildJsonList(countriesList);
		
		return jsonList;
	}
	
	public ArrayList <String> buildJsonList(ArrayList <String> countriesList) throws CsvValidationException, IOException{
		
		ArrayList <String> jsonList = new ArrayList <String>();
		ApiHandler ah = new ApiHandler();
		
		for(int i = 0; i<= countriesList.size(); i++) {
			
			jsonList.add(ah.ApiCall(countriesList.get(i)));
		}
		
		return jsonList;
	}
}
