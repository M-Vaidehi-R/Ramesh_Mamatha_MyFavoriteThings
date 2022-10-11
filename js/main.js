// imports go at the top of of the JS file

//import {getData} from "./modules/dataMiner.js";  

//this is an IIFE (immeadiately invoked function expression)
//this is great for encapsulating code / making it private
// and is also a Javascript programming pattern (the module pattern)

(() => {

    let buttons = document.querySelectorAll(".nav-buttons"),
    //theTemplate = document.querySelector("#activity-template").content,
    theTeam = document.querySelector("#fav-section"),
    TheFavTitle = document.querySelector(".fav-title"),
    TheFavDesc = document.querySelector(".fav-desc"),
    TheFavImg= document.querySelector(".fav-img"),
    FavCont = document.querySelector(".Fav-cont");

    console.log("fired");

    let favorite_data = {};


    function getData()  {                                 //callback is a function/ a placeholder for function/ which runs when the code is succesful
        console.log(`it's alliive :)`);
    
        fetch(`./data.json`) 
        .then(res => res.json()) 
        .then(data => {
            favorite_data = data;
            console.table(favorite_data);
        })
        .catch(error => console.log(error));
    }

       getData();
    function buildTeam() {
        FavCont.style.display ="block";

        let key = this.dataset.key;
        console.log(this.dataset.key);

        FavCont.style.display ="block";

        TheFavImg.querySelector("img").src = `images/${favorite_data[key].Image}`;
       TheFavTitle.textContent = favorite_data[key].name;
       TheFavDesc.textContent = favorite_data[key].Desc;
       

    }   

    buttons.forEach(button => button.addEventListener("click", buildTeam));
})();