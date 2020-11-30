class ReceiveDataFromForm {

     def index() {
     }

     def dataFromForm() {

        [data:params]
     }

     def dataFromForm2() {
        
        def countries = params.country;

        for(int i = 0; i <= countries.size(); i++){

        	
        }

        [name:name,age:age,email:email]
     }
}