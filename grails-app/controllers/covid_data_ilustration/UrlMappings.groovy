package covid_data_ilustration

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
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

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
