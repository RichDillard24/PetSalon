
function Service(description,price){
    this.description=description;
    this.price=price;
}
function isValid(Service){
    let validation=true;

    if(Service.description==""){
        validation=false;
       $("#txtDescription").addclass("Alert-error");
    }
    if(Service.price==""){
        validation=false;
       $("#txtPrice").addclass("Alert-error");
    }
    return validation;
}
function register() {
    console.log("Adding a new service");
    //getting the value
    let inputDescription = $("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
 //create the obj

    let newService = new Service(inputDescription,inputPrice);
    //  petSalon.Service.push(newService);
 
    // display it on the console
    if(isValid(newService)){
    console.log(newService);
   $("input").val("");
    }
}