'use strict'
// let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: '];

function randomCookie(min, max) {
  return Math.floor(Math.random() * (max - min) + min);  
}
function Locations(name, min, max){

    this.name = name;
    this.min = min;
    this.max = max;
    //this.avgSold = avgSold;
    
    this.hours = ['6am: \n','7am: \n','8am: \n','9am: \n','10am: \n','11am: \n','12pm: \n','1pm: \n','2pm: \n','3pm: \n','4pm: \n','5pm: \n','6pm: \n','7pm: \n'];

  
  

    }
 Locations.prototype.getCookiesEachHour = function(){
   let arrayCookie = [];
  for(let i=0; i<this.hours.length;i++){
    arrayCookie.push(`${this.hours[i]} ${randomCookie(this.min,this.max)} cookies`);

 }
 return arrayCookie;
}
let seattle = new Locations("Seattle", 23, 65, 6.3);

let Tokyo = new Locations("Tokyo", 3, 24,1.2);

let Dubai = new Locations("Dubai",11,38,2.3);

let Paris = new Locations("Paris",20,38,2.3);

let Lima = new Locations("Lima",2,16,4.6)

console.log(seattle.getCookiesEachHour())
console.log(Tokyo.getCookiesEachHour())
console.log(Dubai.getCookiesEachHour())
console.log(Paris.getCookiesEachHour())
console.log(Lima.getCookiesEachHour())
