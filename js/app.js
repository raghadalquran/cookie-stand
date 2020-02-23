var a ;
var resresultOfMultiplyult ;
var ulEl;


var seattle = {
minCust : 23 ,
maxCust : 65 ,
averageCookies : 6.3 ,
numOfCustomer : 0 ,
total:0,
array_14 : ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
outPutArr : [],
randomNumOfCustomer : function (){
  seattle.numOfCustomer = getRandom(this.minCust , this.maxCust);
}, 
render : function (){
  var bodyEl = document.getElementById('body-element');
  console.log(bodyEl);
  var mainEl = document.createElement('main');
  bodyEl.append(mainEl);
  var divEl = document.createElement('div');
  mainEl.appendChild(divEl);
  var ulEl = document.createElement('ul');
  divEl.appendChild(ulEl);

  for(var i = 0 ; i < this.array_14.length ; i++){
    this.randomNumOfCustomer();
    //console.log(this.numOfCustomer);
    var numOfCustomer=this.numOfCustomer;
    //console.log(this.numOfCustomer);
    var cookiesPerHour = Math.ceil(numOfCustomer * this.averageCookies);
    //console.log(cookiesPerHour);
    var resultOfMultiply = `at ${this.array_14[i]} :  ${numOfCustomer} cookies `;
    //console.log(resultOfMultiply);
    this.outPutArr.push(resultOfMultiply);
    //console.log(resultOfMultiply);
    
  }
  
},

/* finalOutPut : function (){
  var liEl = document.createElement('li');
  ulEl.appendChild(liEl);}*/


};
    seattle.randomNumOfCustomer();
    //seattle.finalOutPut();
    seattle.render();
      




//helper function to calculate random number of customer
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


/*for (j=0 ; j < seattle.array_14.length ; j++){
    seattle.randomNumOfCustomer();
    a = seattle.numOfCustomer*seattle.averageCookies;
    result= seattle.array_14[j] + ':' + a + 'cookies';
    liEl.textContent = seattle.array_14[j];
    ulEl.appendChild(liEl);
      }*/
     // : ${this.array_14.push(resultOfMultiply)} cookies `;
