'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locations = document.getElementById('main-div');
let salesTable = document.getElementById('salesTable');


function CookieStand(name,minCust,maxCust,avgCookie){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.cookiesPerHour = [];
    this.total = 0;
    CookieStand.allCookies.push(this);
    
}

CookieStand.allCookies = [];

CookieStand.prototype.getCustomer = function(){
    for (let i = 0; i < hours.length; i++) {
        let cookies = Math.ceil(getRandomIntInclusive(this.minCust,this.maxCust)* this.avgCookie);
        this.cookiesPerHour.push(cookies);
        this.total += cookies;

    }
};


    

function makeTableHeader(){
    let tr = document.createElement('tr');
    salesTable.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Location';

    for(let n =0; n< hours.length; n++){
        let th2 = document.createElement('th');
        tr.appendChild(th2);
        th2.textContent = hours[n];
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'Daily totals'
}


function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

}



CookieStand.prototype.render = function(){
     

    let tr = document.createElement('tr');
    salesTable.appendChild(tr);

    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent= this.name;


     for(let m =0; m <hours.length ;m++){
         let td = document.createElement('td');
         tr.appendChild(td);
        td.textContent = this.cookiesPerHour[m];
     }

     let total = document.createElement('th');
     tr.appendChild(total);
     total.textContent = this.total;

     };

     


     
    
     function makeTableFooter(){
         let tr = document.createElement('tr');
         salesTable.appendChild(tr);
        
         let th1 = document.createElement('th');
         tr.appendChild(th1);
         th1.textContent = 'Totals';
        
         let hourlyTotal = 0;
         let totalOfTotals = 0;
       for(let i =0; i< hours.length; i++){
           hourlyTotal = 0;
           for(let j =0; j<CookieStand.allCookies.length; j++){
                
                let total = CookieStand.allCookies[j].cookiesPerHour[i];
                hourlyTotal += total;
                totalOfTotals += total;
                  }
              
        let th2 = document.createElement('th');
        tr.appendChild(th2);
        th2.textContent = hourlyTotal;
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = totalOfTotals;
    }




 let seattle = new CookieStand('Seattle',23,65,6.3,6,20);
     let tokyo = new CookieStand('tokyo',3,24,1.2,6,20);
     let dubai = new CookieStand('dubai',11,38,3.7,6,20);
     let paris = new CookieStand('paris',20,38,2.3,6,20);
     let lima = new CookieStand('lima',2,16,4.6,6,20);

makeTableHeader();


seattle.getCustomer();
seattle.render();

tokyo.getCustomer();
tokyo.render();

dubai.getCustomer();
dubai.render();

paris.getCustomer();
paris.render();

lima.getCustomer();
lima.render();


makeTableFooter();









