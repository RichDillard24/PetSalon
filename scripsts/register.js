let petSalon={
    name: "Pet Salon",
    phone: 999-999-9999,
    hours:{
        open:"9:00 am",
        close:"9:00 pm"
    },
        pets:[]
}
    function Pet(name,age,gender,breed,type,service){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.type=type;
        this.service=service;
    }
function isValid(aPet){
    let validation =true;

    if(aPet.name==""){
        validation=false;
        document.getElementById("txtName").addclass("Alert-error");
    }
    if(aPet.service==""){
        validation=false;
        document.getElementById("txtService").addclass("Alert-error");
}
    return validation;
}
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed= document.getElementById("txtBreed").value;
    let inputType=document.getElementById("txtType").value;
    let inputService = document.getElementById("txtService").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputType,inputService);
    if(isValid(newPet)){
    petSalon.pets.push(newPet);
    // displayCard() ;
    diplayTotalPets();
    displayRows();
    displayDogsCount();
    displayCatsCount();
    displayOtherCount();
    displayServiceCount();
    displayVaccineCount();
} 
}
function deletePet(index){
    petSalon.pets.splice(index,1);
    // displayCard();
    displayRows();
    diplayTotalPets();
    displayDogsCount();
    displayCatsCount();
    displayOtherCount();
    displayServiceCount();
    displayVaccineCount(); 
}
  function init(){
    let pet1 = new Pet("scooby",12,"male","corgi","dog","grooming");
    let pet2 = new Pet("steve",3,"male","pug","dog","grooming");
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    // displayCard();
    displayRows()
    diplayTotalPets();
    displayDogsCount();
    displayCatsCount();
    displayOtherCount();
    displayServiceCount();
    displayVaccineCount();
  }
window.onload=init;