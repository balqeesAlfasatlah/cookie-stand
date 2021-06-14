'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations = document.getElementById('main-div');


function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

}

function City(name,minCust,maxCust,avgCookie,openTime,closeTime){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.openTime = openTime;
    this.closeTime =closeTime;
    this.hourlyTotal = [];
    this.dailyTotal = 0;
    
}

City.prototype.cookiesPerHour = function(){
    for (let n = 0; n < hours.length; n++) {
        this.hourlyTotal[n] = Math.ceil(getRandomIntInclusive(this.minCust,this.maxCust)* this.avgCookie);
        this.dailyTotal += this.hourlyTotal[n];

    }
};


City.prototype.render = function(){
     this.cookiesPerHour();
    
    let arcticle = document.createElement('article');
    locations.appendChild(arcticle);
    let table = document.createElement('table');
    arcticle.appendChild(table);

    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    let tableHeader = document.createElement('th');
    table.appendChild(tableHeader);
    tableHeader.textContent= this.name;


     for(let m =0;m <this.hourlyTotal.length ;m++){
         let tableData = document.createElement('td');
         tableRow.appendChild(tableData);
        tableData.textContent = this.hourlyTotal[m];
     }

     let tableData = document.createElement('td');
     tableData.textContent=this.dailyTotal;
     tableRow.appendChild(tableData);
     table.appendChild(tableRow);
     };

     let seattle = new City('Seattle',23,65,6.3,6,20);
     let tokyo = new City('tokyo',3,24,1.2,6,20);
     let dubai = new City('dubai',11,38,3.7,6,20);
     let paris = new City('paris',20,38,2.3,6,20);
     let lima = new City('lima',2,16,4.6,6,20);

     let city = [seattle,tokyo,dubai,paris,lima];

     
     for(let j=0; j<city.length;j++){
         city[j].cookiesPerHour();
     }
      
      let tableBody = document.getElementById('dataTable');

      function renderheader() {
        var headerrow = document.createElement('tr');
        var headerstore = document.createElement('th');
        headerstore.textContent = 'Locations';
        headerrow.appendChild(headerstore);
        tableBody.appendChild(headerrow);
        for (var i = 0; i < hours.length; i++) {
          var headerhour = document.createElement('th');
          headerhour.textContent = hours[i];
          headerstore.appendChild(headerhour);
          headerrow.appendChild(headerhour);
        }
        var headertotal = document.createElement('th');
        headertotal.textContent = 'Store Totals';
        headerrow.appendChild(headertotal);
      }
      
      renderheader();
      for (var i = 0; i < city.length; i++) {
        city[i].render();
      }
      renderFooter();
      
      function renderFooter() {
        var headerrow = document.createElement('tr');
        tableBody.appendChild(headerrow);
        var tableData = document.createElement('td');
      
        tableData.textContent = 'Daily Total';
        headerrow.appendChild(tableData);
      
        var runningTotal;
      
        for (var i = 0; i < hours.length; i++) {
          var tableData = document.createElement('td');
          var total = 0;
          for (let j = 0; j < city.length; j++) {
            total += city[i].custPerHourArray[j];
            runningTotal += city[i].custPerHourArray[j];
          }
          tableData.textContent = total;
          headerrow.appendChild(tableData);
      
        }
        var tableData = document.createElement('td');
        tableData.textContent = runningTotal;
        headerrow.appendChild(tableData);
      }
     



       
        









































/*let seattle = {
    name: 'Seattle',
    minCust: 23, maxCust: 65, avgCookie: 6.3, cookesPerhour: [], total: 0,

    getHours: function () {

        for (let n = 0; n < hours.length; n++) {

            let cookies = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookie);
            this.cookesPerhour.push(Math.ceil(cookies));

            this.total += cookies;
            this.total = this.total;
        }

    },

    render: function () {
        let h2 = document.createElement('h2');
        locations.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        locations.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]}: ${this.cookesPerhour[i]} cookies`;

        }
        let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = ` Total :${this.total} cookies`;
    }
};



let tokyo = {
    name: 'Tokyo',
    minCust: 3, maxCust: 24, avgCookie: 1.2, cookesPerhour: [], total: 0,

    getHours: function () {

        for (let n = 0; n < hours.length; n++) {

            let cookies = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookie);
            this.cookesPerhour.push(Math.ceil(cookies));

            this.total += cookies;
            this.total = this.total;


        }

    },



    render: function () {
        let h2 = document.createElement('h2');
        locations.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        locations.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]}: ${this.cookesPerhour[i]} cookies`;

        }
        let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = ` Total :${this.total} cookies`;


    }



};



let dubai = {
    name: 'Dubai',
    minCust: 11, maxCust: 38, avgCookie: 3.7, cookesPerhour: [], total: 0,

    getHours: function () {

        for (let n = 0; n < hours.length; n++) {

            let cookies = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookie);
            this.cookesPerhour.push(Math.ceil(cookies));

            this.total += cookies;
            this.total = this.total;


        }

    },



    render: function () {
        let h2 = document.createElement('h2');
        locations.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        locations.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]}: ${this.cookesPerhour[i]} cookies`;

        }
        let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = ` Total :${this.total} cookies`;


    }



};




let paris = {
    name: 'Paris',
    minCust: 20, maxCust: 38, avgCookie: 2.3, cookesPerhour: [], total: 0,

    getHours: function () {

        for (let n = 0; n < hours.length; n++) {

            let cookies = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookie);
            this.cookesPerhour.push(Math.ceil(cookies));

            this.total += cookies;
            this.total = this.total;


        }

    },



    render: function () {
        let h2 = document.createElement('h2');
        locations.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        locations.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]}: ${this.cookesPerhour[i]} cookies`;

        }
        let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = ` Total :${this.total} cookies`;


    }



};



let lima = {
    name: 'Lima',
    minCust: 2, maxCust: 16, avgCookie: 4.6, cookesPerhour: [], total: 0,

    getHours: function () {

        for (let n = 0; n < hours.length; n++) {

            let cookies =  Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCookie);
            this.cookesPerhour.push(Math.ceil(cookies));

            this.total += cookies;
            this.total = this.total;
        }

    },

    render: function () {
        let h2 = document.createElement('h2');
        locations.appendChild(h2);
        h2.textContent = this.name;
        let ul = document.createElement('ul');
        locations.appendChild(ul);
        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${hours[i]}: ${this.cookesPerhour[i]} cookies`;

        }
        let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = ` Total :${this.total} cookies`;
    }
};
*/








/*tokyo.getHours();
tokyo.render();

dubai.getHours();
dubai.render();

paris.getHours();
paris.render();

lima.getHours();
lima.render();*/

