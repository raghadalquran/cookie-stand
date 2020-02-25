'use strict'

var arrayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var container = document.getElementById('resturant');
var tableEl = document.createElement('table');
var totalTotal = 0;
var newArr = [];
var finalTotal = 0;

function Resturant(name, minCust, maxCust, averageCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = averageCookies;
  this.cookies = [];
  this.total=0;
  
  
}
Resturant.prototype.getTheRandom = function () {
    var numOfCustomer = getRandom(this.minCust , this.maxCust);
    return numOfCustomer;
  
} 
Resturant.prototype.arrayOfCookies = function(){
  for(var b = 0; b < arrayHours.length; b++){
  // this.getTheRandom();
  this.cookies.push(Math.floor(this.getTheRandom()*this.averageCookies));
  // console.log(this.cookies);
  this.total = this.total + this.cookies[b];
   //console.log(this.total);
  }

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
  th1El.textContent = 'Total';

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
      td1El.textContent =Math.floor( this.getTheRandom() * this.averageCookies);
      tr2El.appendChild(td1El);
      }
      this.arrayOfCookies();
      var td1El = document.createElement('td');
      td1El.textContent = this.total;
      tr2El.appendChild(td1El);
    }

Resturant.prototype.footer = function (){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = 'Total';

  for(var m = 0; m < arrayHours.length; m++){
  var tdEl = document.createElement('td');
  tdEl.textContent = newArr[m];
  trEl.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = finalTotal;
  trEl.appendChild(tdEl);
}


var seattle = new Resturant('Seattle', 23, 65, 6.3);
seattle.header();
seattle.getTheRandom();
seattle.arrayOfCookies();
seattle.render();

var tokyo = new Resturant('Tokyo', 3 , 24 , 1.2 );
tokyo.render();

var dubi = new Resturant('Dubi', 11, 38 , 3.7);
dubi.render();

var paris = new Resturant('Paris', 20, 38 , 2.3);
paris.render();

var lima = new Resturant('Lima', 2, 16 , 4.6);
lima.render();


//calculate total of total
function totalOfTotal(){
  for(var t = 0; t < arrayHours.length; t++){
    totalTotal = seattle.cookies[t]+tokyo.cookies[t]+dubi.cookies[t]+paris.cookies[t]+lima.cookies[t];
    newArr.push(totalTotal);
    finalTotal = finalTotal + newArr[t];
  }
  console.log(finalTotal);

}


totalOfTotal();
console.log(newArr);
seattle.footer();


//helper function to calculate random number of customer
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; }//The maximum is exclusive and the minimum is inclusive



