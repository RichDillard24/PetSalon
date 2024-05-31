function displayCard(){
    let card="";
    const petDiv=document.getElementById("petDiv");
   
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]
       
        card+=`
            <div class="petCard">
                <h4> ${pet.name}</h4>
                <p> ${pet.age}</p>
                <p> ${pet.gender}</p>
                <p> ${pet.breed} </p>
                <p> ${pet.type} </p>
                <p> ${pet.service}</p>
            </div>
        `;
    }
    petDiv.innerHTML=card;
}
function displayRows(){
    const petTable=document.getElementById("petTable");
    petTable.innerHTML="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        let row =`
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td> 
            <td>${pet.breed}</td>
            <td>${pet.type}</td>
            <td>${pet.service}</td>
            <td><button class="btn btn-danger" onclick=deletPet(${i})>Delete</button></td>
        </tr>
        `;
        petTable.innerHTML+=row;
    }
}
function diplayTotalPets(){
    document.getElementById("total").innerHTML=petSalon.pets.length;
}
function displayServiceCount(){
    let grooming=0;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]
        if(pet.service=="Grooming"){
            grooming++
        }
    }
    document.getElementById("totalGrooming").innerHTML=grooming;
}
function displayVaccineCount(){
    let vaccines=0;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]
        if(pet.service=="Vaccines"){
            vaccines++
        }
    }
    document.getElementById("totalVaccines").innerHTML=vaccines;
}
function displayDogsCount(){
    let Dogs=0;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]
        if(pet.type=="Dogs"){
            Dogs++
        }
    }
    document.getElementById("totalDogs").innerHTML=Dogs;
}
function displayCatsCount(){
    let Cats=0;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]
        if(pet.type=="Cats"){
            Cats++
        }
    }
    document.getElementById("totalCats").innerHTML=Cats;

}
function displayOtherCount(){
    let Other=0;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]
        if(pet.type=="Other"){
            Other++
        }
    }
    document.getElementById("totalOther").innerHTML=Other;
}
