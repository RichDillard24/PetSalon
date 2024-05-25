let petSalon={
    name: "Pet Salon",
    phone: 999-999-9999,
    hhours:{
        open:"9:00 am",
        close:"9:00 pm"
    },
        pets:[]
}
    function Pet(name,age,gender,breed,service){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
    }
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("textAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
}
  function init(){
    let pet1 = new Pet("scooby",12,"male","great dane","grooming");
    let pet2 = new Pet("steve",3,"male","corgi","grooming");
    petSalon.pets.push(petSalon.pet1);
    console.table(petSalon.pets);
  }
window.onload=init;