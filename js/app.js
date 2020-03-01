'use strict'
//global variables
var arrayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var container = document.getElementById('resturant');
var tableEl = document.createElement('table');
container.appendChild(tableEl);
var totalTotal = 0;
var newArr = [];
var finalTotal = 0;
var salmonsShops = [];

//the constructor function
function Resturant(name, minCust, maxCust, averageCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookies = averageCookies;
  this.cookies = [];
  this.total = 0;
  this.getTheRandom();
  //this.newLocations;
  salmonsShops.push(this);
  this.render();
}
//calculate the random  
Resturant.prototype.getTheRandom = function () {
  var numOfCustomer = getRandom(this.minCust, this.maxCust);
  return numOfCustomer;
}
//add the random number of cookies to cookies array and calculate the total    
Resturant.prototype.arrayOfCookies = function () {
  for (var b = 0; b < arrayHours.length; b++) {
    this.cookies.push(Math.floor(this.getTheRandom() * this.averageCookies));
    this.total = this.total + this.cookies[b];
  }
}
//header of the table
function header() {
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
//render of the table
Resturant.prototype.render = function () {
  var tr2El = document.createElement('tr');
  tableEl.appendChild(tr2El);
  var td1El = document.createElement('td');
  td1El.textContent = this.name;
  tr2El.appendChild(td1El);
  for (var k = 0; k < arrayHours.length; k++) {
    var td1El = document.createElement('td');
    this.getTheRandom();
    td1El.textContent = Math.floor(this.getTheRandom() * this.averageCookies);
    tr2El.appendChild(td1El);
  }
  this.arrayOfCookies();
  var td1El = document.createElement('td');
  td1El.textContent = this.total;
  tr2El.appendChild(td1El);
}
//calculate total of total
function newTotalOfTotal() {
  var hourTotal;
  var megaTotal = 0;
  document.getElementsByTagName('table');
  var trElF = document.createElement('tr');
  tableEl.appendChild(trElF);
  var td5 = document.createElement('td');
  trElF.appendChild(td5);
  td5.textContent = 'Total';
  for (var hour = 0; hour < arrayHours.length; hour++) {
    hourTotal = 0;
    for (var shop = 0; shop < salmonsShops.length; shop++) {
      hourTotal += salmonsShops[shop].cookies[hour];
    }
    megaTotal += hourTotal;
    var tdMegaTotal = document.createElement('td');
    tdMegaTotal.textContent = hourTotal;
    trElF.appendChild(tdMegaTotal);
  }
  var tdTotal = document.createElement('td');
  tdTotal.textContent = megaTotal;
  trElF.appendChild(tdTotal);
}
//call the header of the table
header();
//creat new location to my table from the form
var locations = document.getElementById('locations');
locations.addEventListener('submit', function (event) {
  event.preventDefault();
  var locationName = event.target.name.value;
  var locationMax = parseInt(event.target.max.value);
  var locationMin = parseInt(event.target.min.value);
  var locationAvg = parseInt(event.target.avg.value);
  //remove the footer
  tableEl.removeChild(tableEl.lastChild);
  new Resturant(locationName, locationMax, locationMin, locationAvg);
  //call the footer
  newTotalOfTotal();
  document.getElementById("locations").reset();


});
//create new objects
new Resturant('Seattle', 23, 65, 6.3);
new Resturant('Tokyo', 3, 24, 1.2);
new Resturant('Dubi', 11, 38, 3.7);
new Resturant('Paris', 20, 38, 2.3);
new Resturant('Lima', 2, 16, 4.6);
//helper function to calculate random number of customer
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


