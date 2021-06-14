'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations = document.getElementById('main-div');

let seattle = {
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


function getRandomIntInclusive(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

}




seattle.getHours();
seattle.render();

tokyo.getHours();
tokyo.render();

dubai.getHours();
dubai.render();

paris.getHours();
paris.render();

lima.getHours();
lima.render();

