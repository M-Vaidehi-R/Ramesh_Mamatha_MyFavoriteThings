// imports go at the top of of the JS file

//import {getData} from "./modules/dataMiner.js";  

//this is an IIFE (immeadiately invoked function expression)
//this is great for encapsulating code / making it private
// and is also a Javascript programming pattern (the module pattern)

(() => {

     let TheFavTitle = document.querySelector(".fav-title"),
    TheFavDesc = document.querySelector(".fav-desc"),
    TheFavImg= document.querySelector(".fav-img"),
    FavCont = document.querySelector(".Fav-cont"),
    TheFavTag = document.querySelector(".fav-tagLine"),
    buttons = document.querySelectorAll(".nav-buttons"),
    closeButton = document.querySelector(".close"),
    TheFoot = document.querySelector(".footer");

    console.log("fired");

    let favorite_data = {};


    function getData()  {                                 
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
        TheFoot.style.display = "block";

        let key = this.dataset.key;
        console.log(this.dataset.key);
         
        TheFavImg.style.display="block";
        TheFavImg.querySelector("img").src = `images/${favorite_data[key].Image}`;
        TheFavTag.textContent = favorite_data[key].tagline;
        TheFavTitle.textContent = favorite_data[key].name;
        TheFavDesc.textContent = favorite_data[key].Desc;
    }   
   
    function animateButtons() {

       let targetEl = this;
        gsap.to(targetEl, {
            x: 15,
            y: 0,
            duration: 2,
            ease: "bounce.out",
        })

    }

   function animateContent(){
    let content = document.querySelector(".Fav-cont");
    gsap.to(content, {
        x: 0,
        y: 20,
        duration: 2,
        ease: "ease-in",
    })
   } 

   function close(){
    FavCont.style.display="none";
   }

    buttons.forEach(buton => buton.addEventListener("click", animateButtons));
    buttons.forEach(buton => buton.addEventListener("click", animateContent));
    buttons.forEach(button => button.addEventListener("click", buildTeam));
    closeButton.addEventListener("click", close);
})();