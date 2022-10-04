// imports go at the top of of the JS file

import {getData} from "./modules/dataMiner.js";  

//this is an IIFE (immeadiately invoked function expression)
//this is great for encapsulating code / making it private
// and is also a Javascript programming pattern (the module pattern)

(() => {
    console.log("fired");

      // get a reference to the template's contents and the target container
      //into which we will clone a copy of the markup

      let theTemplate = document.querySelector("#activity-template").content,
          theTeam = document.querySelector("#fav-section");

          //judt to test if it imported correctly
          //getData();

    function buildTeam(data) {
        //get all the keys from
        debugger;
        const theFavs = Object.keys(data);

        //this JS creates keys like [trevor, justin etc]

        theFavs.forEach(fav => {

            //debugger;
            let panel = theTemplate.cloneNode(true),
                containers= panel.firstElementChild.children;  // the section tags contents

                containers[0].querySelector("img").src = `images/${data[fav].Picture}`;
                
                containers[1].textContent = data[fav].name;
                containers[2].textContent = data[fav].Desc;
                containers[3].textContent = data[fav].nickname;

                theTeam.appendChild(panel);
        })
       

    }   

    getData(buildTeam);
})();