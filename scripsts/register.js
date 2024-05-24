let petSalon={
    name: "Pet Salon",
    phone: 999-999-9999,
    hhours:{
        open:"9:00 am",
        close:"9:00 pm"
    },
        pets:[
            {
                name:"steve",
                age:4,
                gender:"male",
                service:"grooming",
                breed: "corgi",
            },
            {
                name:"jeff",
                age: 1,
                gender: "male",
                service:"grooming",
                breed:"lab",
            },
            {
                name:"steve",
                age: 1,
                gender: "male",
                service:"grooming",
                breed:"golden retrevier"
            }      
        ] 
}
function displayNames(){
    for(let i=0;i<3;i++){
       names+=`<p> ${petSalon.pets[i].name}</p>`;
    console.log(names);

    document.getElementById("displayNames").innerHTML=names;
    }
}
function countPets(){
    console.log(petSalon.pets.length);
}
  
