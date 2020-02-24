'use strict'

var arrayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var container = document.getElementById('resturant');
var tableEl = document.createElement('table');


function Resturant(name, minCust, maxCust, averageCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = averageCookies;
  this.numOfCustomer = 0;
  this.cookies = [];
  this.total=0;
  //this.numOfCustomerArr = [];
  
}
Resturant.prototype.getTheRandom = function (minCust, maxCust) {
    this.numOfCustomer = getRandom(this.minCust , this.maxCust);
  //for(var s=0; s < arrayHours.length ;s++){
  //this.numOfCustomerArr.push(Math.floor(getRandom(this.minCust, this.maxCust) * this.averageCookies));}
  //console.log(this.numOfCustomerArr);
} 

Resturant.prototype.header = function () {
 
  container.appendChild(tableEl);
  var tr1El = document.createElement('tr');
  tableEl.appendChild(tr1El);
  var th1El = document.createElement('th');
  tr1El.appendChild(th1El);
  for (var j = 0; j < arrayHours.length; j++) {
    var th1El = document.createElement('th');
    th1El.textContent = arrayHours[j];
    tr1El.appendChild(th1El);
  }
  var th1El = document.createElement('th');
  tr1El.appendChild(th1El);
  th1El.textContent = 'Daily Location Total';

}

Resturant.prototype.render = function () {

      var tr2El = document.createElement('tr');
      tableEl.appendChild(tr2El);
      var td1El = document.createElement('td');
      td1El.textContent = this.name;
      tr2El.appendChild(td1El);
      for(var k = 0; k < arrayHours.length; k++){
      var td1El = document.createElement('td');
      this.getTheRandom();
      td1El.textContent =Math.floor( this.numOfCustomer * this.averageCookies);
      tr2El.appendChild(td1El);
      }
      var td1El = document.createElement('td');
      td1El.textContent = this.totalCookies();
      tr2El.appendChild(td1El);
    }

Resturant.prototype.arrayOfCookies = function(){
      for(var b = 0; b < arrayHours.length; b++){
      this.getTheRandom();
      this.cookies.push(Math.floor(this.numOfCustomer*this.averageCookies));
       console.log(this.cookies);
      }

    }

Resturant.prototype.totalCookies = function(){
  var total2 = 0;
  for(var r = 0; r < arrayHours.length; r++){
  this.arrayOfCookies();
  total2 = total2 + this.cookies[r];
  //console.log(this.total2);
  // this.total2=total2;}
  //total2 = total2 + Math.floor(this.numOfCustomer * this.averageCookies);
}}
//console.log(this.total);

    /*Resturant.prototype.data = function (){
      var cookiesPerCustomer = [];
      var total=0;
      for (var i = 0; i < 5; i++) {
      //total = total + Math.floor(this.numOfCustomer * this.averageCookies);

      total = this.getTheRandom() * this.averageCookies;
      cookiesPerCustomer.push(parseInt(total));
      }
      return total;
      console.log('total= ',total);

    }*/

var seattle = new Resturant('Seattle', 23, 65, 6.3);
seattle.header();
seattle.render();
//seattle.data();



// console.log(seattle.getTheRandom());

var tokyo = new Resturant('Tokyo', 3 , 24 , 1.2 );
//tokyo.render();
tokyo.render();
//tokyo.data();

var dubi = new Resturant('Dubi', 11, 38 , 3.7);
//dubi.render();
dubi.render();
//dubi.data();
var paris = new Resturant('Paris', 20, 38 , 2.3);
//paris.render();
paris.render();
//paris.data();
var lima = new Resturant('Lima', 2, 16 , 4.6);
//lima.render();*/
lima.render();
//lima.data();
//helper function to calculate random number of customer
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; }//The maximum is exclusive and the minimum is inclusive
