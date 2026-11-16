
// ======================================
// 🪐 SAYYORALAR TARTIBI
// STORAGE SYSTEM
// Developer: Ulug'bek.R
// ======================================


const Storage = {



    // Rekord olish

    getBest(){


        let best =

        localStorage.getItem(
            "planetBest"
        );



        return best
        ?
        Number(best)
        :
        0;


    },








    // Rekord saqlash


    saveBest(score){


        let best =
        this.getBest();



        if(score > best){


            localStorage.setItem(

                "planetBest",

                score

            );


            return true;


        }



        return false;


    },









    // O'yinlar soni


    getGames(){


        let games =

        localStorage.getItem(
            "planetGames"
        );



        return games
        ?
        Number(games)
        :
        0;


    },







    addGame(){


        let games =
        this.getGames();



        games++;



        localStorage.setItem(

            "planetGames",

            games

        );


    },










    // Oxirgi natija


    saveLast(score,name){


        let data={


            name:name,


            score:score,


            date:
            new Date()
            .toLocaleString()


        };



        localStorage.setItem(

            "planetLast",

            JSON.stringify(data)

        );


    },








    getLast(){


        let data =

        localStorage.getItem(
            "planetLast"
        );



        return data
        ?
        JSON.parse(data)
        :
        null;


    },








    // Tozalash


    clear(){


        localStorage.removeItem(
            "planetBest"
        );


        localStorage.removeItem(
            "planetGames"
        );


        localStorage.removeItem(
            "planetLast"
        );


    }



};