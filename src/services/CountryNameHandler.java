package services;
//This class handles the country name the user load in the form
public class CountryNameHandler {

	public CountryNameHandler() {
		
	}
	//
	public String buildJson(String country) {
		
		ApiHandler ah = new ApiHandler();
		Utils u = new Utils();
		String json = "";
		
		country = u.stringFormat(country);
		json = ah.ApiCall(country);
		
		return json;
	}
}
