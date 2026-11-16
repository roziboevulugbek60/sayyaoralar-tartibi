// ======================================
// 🪐 SAYYORALAR TARTIBI
// GAME ENGINE
// Developer: Ulug'bek.R
// ======================================


const menu =
document.getElementById("menu");


const game =
document.getElementById("game");


const result =
document.getElementById("result");



const startBtn =
document.getElementById("start");


const checkBtn =
document.getElementById("check");


const restartBtn =
document.getElementById("restart");



const planetsBox =
document.getElementById("planets");



const scoreText =
document.getElementById("score");


const bestText =
document.getElementById("best");



const finalScore =
document.getElementById("finalScore");






let playerName = "";

let currentPlanets = [];

let score = 0;

let draggedIndex = null;







// ==============================
// BOSHLASH
// ==============================


startBtn.onclick = ()=>{


    playerName =
    document
    .getElementById("playerName")
    .value
    .trim()
    ||
    "O'yinchi";



    startGame();


};






function startGame(){


    menu.classList.add("hidden");


    game.classList.remove("hidden");



    score = 0;


    scoreText.textContent = score;



    bestText.textContent =
    Storage.getBest();




    currentPlanets =
    shufflePlanets();



    drawPlanets();


}









// ==============================
// SAYYORALARNI CHIQARISH
// ==============================


function drawPlanets(){



    planetsBox.innerHTML="";



    currentPlanets.forEach((planet,index)=>{



        let div =
        document.createElement("div");



        div.className =
        "planet";



        div.draggable=true;



        div.dataset.index=index;




        div.innerHTML = `

        <div class="planet-icon">

        ${planet.icon}

        </div>


        <div class="planet-name">

        ${index+1}. ${planet.name}

        </div>

        `;




        // Boshlash

        div.addEventListener(
            "dragstart",
            ()=>{


                draggedIndex=index;


            }
        );




        div.addEventListener(
            "dragover",
            e=>{

                e.preventDefault();

            }
        );





        div.addEventListener(
            "drop",
            ()=>{


                swapPlanets(
                    draggedIndex,
                    index
                );


            }
        );



        planetsBox.appendChild(div);



    });


}








// ==============================
// ALMASHTIRISH
// ==============================


function swapPlanets(a,b){



    let temp =
    currentPlanets[a];


    currentPlanets[a] =
    currentPlanets[b];


    currentPlanets[b] =
    temp;



    drawPlanets();


}









// ==============================
// TEKSHIRISH
// ==============================


checkBtn.onclick = ()=>{



    let correct = 0;



    currentPlanets.forEach(
        (planet,index)=>{


            if(
            planet.id === index+1
            ){

                correct++;


            }


        }
    );







    score =
    correct * 10;



    scoreText.textContent =
    score;





    if(correct===8){


        alert(
        "🎉 Ajoyib! Barcha sayyoralar to'g'ri joylashdi!"
        );


    }

    else{


        alert(
        "❌ Hali xato bor. Yana urinib ko'ring!"
        );


    }






    Storage.saveBest(score);



    bestText.textContent =
    Storage.getBest();



};









// ==============================
// NATIJA
// ==============================


function finishGame(){



    game.classList.add(
        "hidden"
    );


    result.classList.remove(
        "hidden"
    );



    finalScore.textContent =
    score;



    Storage.saveLast(
        score,
        playerName
    );



    Storage.addGame();


}









// ==============================
// QAYTA O'YNASH
// ==============================


restartBtn.onclick = ()=>{


    result.classList.add(
        "hidden"
    );


    menu.classList.remove(
        "hidden"
    );


};






// Boshlanish

bestText.textContent =
Storage.getBest();