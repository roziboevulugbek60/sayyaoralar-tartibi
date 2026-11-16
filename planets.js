
// ======================================
// 🪐 SAYYORALAR TARTIBI
// PLANETS DATABASE
// Developer: Ulug'bek.R
// ======================================


const planets = [


{
    id:1,
    name:"Merkuriy",
    icon:"☿️",
    info:"Quyoshga eng yaqin va eng kichik sayyora."
},



{
    id:2,
    name:"Venera",
    icon:"♀️",
    info:"Eng issiq sayyoralardan biri."
},



{
    id:3,
    name:"Yer",
    icon:"🌍",
    info:"Hayot mavjud bo'lgan yagona ma'lum sayyora."
},



{
    id:4,
    name:"Mars",
    icon:"🔴",
    info:"Qizil sayyora deb ataladi."
},



{
    id:5,
    name:"Yupiter",
    icon:"🟤",
    info:"Quyosh tizimidagi eng katta sayyora."
},



{
    id:6,
    name:"Saturn",
    icon:"🪐",
    info:"Halqalari bilan mashhur sayyora."
},



{
    id:7,
    name:"Uran",
    icon:"🔵",
    info:"Muz gigantlaridan biri."
},



{
    id:8,
    name:"Neptun",
    icon:"🌊",
    info:"Quyoshdan eng uzoq sayyora."
}


];







// Sayyoralarni aralashtirish


function shufflePlanets(){


    return [...planets].sort(

        ()=>Math.random()-0.5

    );


}








// To'g'ri tartibni olish


function getCorrectOrder(){


    return planets.map(

        planet=>planet.id

    );


}