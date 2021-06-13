'use strict';
let locations = document.getElementById('main-div');

let seattle = {
    minCust: 23, maxCust: 65, avgCookie: 6.3, cookesPerhour: [],
     hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    dayHours: function () {
        let hoursList = document.createElement('ul');
        locations.appendChild(hoursList);
        for (let i = 0; i < this.hours.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = this.hours[i];
            hoursList.appendChild(listItem);
           
            
        }
        
      this.cookesPerhour = Array.from(hoursList);

    }, getHours: function () {

        for(let n =0;n<this.hours.length;n++){
            this.cookesPerhour.push(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookie);
            
        }
        console.log(this.cookesPerhour);
        
        return this.cookesPerhour;

    }
};

function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

}



seattle.dayHours();
seattle.getHours();

