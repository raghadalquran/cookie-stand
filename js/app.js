'use strict'
var a ;


var seattle = {
minCust : 23 ,
maxCust : 65 ,
averageCookies : 6.3 ,
numOfCustomer : 0 ,
totalNumOfCookies :0,
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
  var h2El = document.createElement('h2');
  mainEl.appendChild(h2El);
  h2El.textContent = 'Seattle';
  var divEl = document.createElement('div');
  mainEl.appendChild(divEl);
  var ulEl = document.createElement('ul');
  divEl.appendChild(ulEl);

  for(var i = 0 ; i < this.array_14.length ; i++){
    this.randomNumOfCustomer();
    //console.log(this.numOfCustomer);
    var numOfCustomer=this.numOfCustomer;
    //console.log(this.numOfCustomer);
    var cookiesPerHour = Math.floor(numOfCustomer * this.averageCookies);
    //console.log(cookiesPerHour);
    var resultOfMultiply = `at ${this.array_14[i]} :  ${cookiesPerHour} cookies `;
    //console.log(resultOfMultiply);
    this.outPutArr.push(resultOfMultiply);
    //console.log(resultOfMultiply);
    var liEl = document.createElement('li');
      liEl.textContent = this.outPutArr[i];
      ulEl.appendChild(liEl);
    
  }
  
}

};
    seattle.randomNumOfCustomer();
    seattle.render();



    var Tokyo = {
      minCust : 3 ,
      maxCust : 24 ,
      averageCookies : 1.2 ,
      numOfCustomer : 0 ,
      array_14 : ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
      outPutArr : [],
      randomNumOfCustomer : function (){
        Tokyo.numOfCustomer = getRandom(this.minCust , this.maxCust);
      }, 
      render : function (){
        var bodyEl = document.getElementById('body-element');
        console.log(bodyEl);
        var mainEl = document.createElement('main');
        bodyEl.append(mainEl);
        var h2El = document.createElement('h2');
        mainEl.appendChild(h2El);
        h2El.textContent = 'Tokyo';
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
          var liEl = document.createElement('li');
            liEl.textContent = this.outPutArr[i];
            ulEl.appendChild(liEl);
          
        }
        
      }
      
      };
      Tokyo.randomNumOfCustomer();
      Tokyo.render();
      


      var Dubai = {
        minCust : 11 ,
        maxCust : 38 ,
        averageCookies : 3.7 ,
        numOfCustomer : 0 ,
        array_14 : ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
        outPutArr : [],
        randomNumOfCustomer : function (){
        Dubai.numOfCustomer = getRandom(this.minCust , this.maxCust);
        }, 
        render : function (){
          var bodyEl = document.getElementById('body-element');
          console.log(bodyEl);
          var mainEl = document.createElement('main');
          bodyEl.append(mainEl);
          var h2El = document.createElement('h2');
          mainEl.appendChild(h2El);
          h2El.textContent = 'Dubi';
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
            var liEl = document.createElement('li');
              liEl.textContent = this.outPutArr[i];
              ulEl.appendChild(liEl);
            
          }
          
        }
        
        };
        Dubai.randomNumOfCustomer();
        Dubai.render();
        



        var Paris = {
          minCust : 11 ,
          maxCust : 38 ,
          averageCookies : 3.7 ,
          numOfCustomer : 0 ,
          array_14 : ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
          outPutArr : [],
          randomNumOfCustomer : function (){
          Paris.numOfCustomer = getRandom(this.minCust , this.maxCust);
          }, 
          render : function (){
            var bodyEl = document.getElementById('body-element');
            console.log(bodyEl);
            var mainEl = document.createElement('main');
            bodyEl.append(mainEl);
            var h2El = document.createElement('h2');
            mainEl.appendChild(h2El);
            h2El.textContent = 'Paris';
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
              var liEl = document.createElement('li');
                liEl.textContent = this.outPutArr[i];
                ulEl.appendChild(liEl);
              
            }
            
          }
          
          };
          Paris.randomNumOfCustomer();
          Paris.render();
          




          var Lima = {
            minCust : 11 ,
            maxCust : 38 ,
            averageCookies : 3.7 ,
            numOfCustomer : 0 ,
            array_14 : ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
            outPutArr : [],
            randomNumOfCustomer : function (){
              Lima.numOfCustomer = getRandom(this.minCust , this.maxCust);
            }, 
            render : function (){
              var bodyEl = document.getElementById('body-element');
              console.log(bodyEl);
              var mainEl = document.createElement('main');
              bodyEl.append(mainEl);
              var h2El = document.createElement('h2');
              mainEl.appendChild(h2El);
              h2El.textContent = 'Lima';
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
                var liEl = document.createElement('li');
                  liEl.textContent = this.outPutArr[i];
                  ulEl.appendChild(liEl);
                
              }
              
            }
            
            };
            Lima.randomNumOfCustomer();
            Lima.render();
            
  




//helper function to calculate random number of customer
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

