'use strict'
 let hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ',"Total: "];


let objectNumber = 0; 
function randomCookie(min, max) {
  return Math.floor(Math.random() * (max - min) + min);  
}
function Locations(name, min, max,avg){

    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.hours = hours;
    objectNumber++;
    }
 Locations.prototype.getCookiesEachHour = function(){
   this.arrayCookie = [];
   let total = 0;
   let currentCount = 0;
  for(let i=0; i<hours.length-1 ;i++){
    currentCount = Math.floor(randomCookie(this.min,this.max)*this.avg); 
    this.arrayCookie.push(`${hours[i]} ${currentCount} cookies`);
    total += currentCount;
    console.log(total);

    
 }
    this.arrayCookie.push(`Total: ${total} cookies`);
 return this.arrayCookie;
}
let seattle = new Locations("Seattle", 23, 65, 6.3);

let Tokyo = new Locations("Tokyo", 3, 24,1.2);

let Dubai = new Locations("Dubai",11,38,2.3);

let Paris = new Locations("Paris",20,38,2.3);

let Lima = new Locations("Lima",2,16,4.6);

let objectsArray = [seattle,Tokyo,Dubai,Paris,Lima];



seattle.getCookiesEachHour();
Tokyo.getCookiesEachHour();
Dubai.getCookiesEachHour();
Paris.getCookiesEachHour();
Lima.getCookiesEachHour();


function makeCookieDiv(Locations){

  const div = document.getElementById('div');

  const createArticle = document.createElement('article');
    let store = Locations.name;
  createArticle.setAttribute("id", store);

  div.appendChild(createArticle);
  const h2 = document.createElement('h2');
  h2.textContent = Locations.name;
  createArticle.appendChild(h2);
}

// function makeCookieLi(Locations){
//   let store = Locations.name;
//    const article = document.getElementById(store);
//   const ul = document.createElement("ul")
//   article.appendChild(ul);
//   for(let i = 0; i < Locations.arrayCookie.length; i++){
//     const li = document.createElement('li');
//     li.textContent = Locations.arrayCookie[i];
//     ul.appendChild(li);
//   }
//}
function addTableHeader() {
  // let store = Locations.name;
  // const article = document.getElementById(store);
  //  const table = document.createElement("table");
  console.log("Inside Table Header function");
  const table = document.getElementById("table");
  const th1 = document.createElement("th");
  const tr = document.createElement("tr");
  table.appendChild(tr);
  th1.textContent = "Locations";
  tr.appendChild(th1);
  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}
 function addTableBody(locations){
  const body = document.getElementById("table");
  // for (let i=0; i < objectNumber; i++ ){
    
    const tr = document.createElement("tr");
    body.appendChild(tr);
    const nameTd = document.createElement('td');
    nameTd.textContent = locations.name;
    tr.appendChild(nameTd);
    for (let j=0; j < locations.arrayCookie.length; j++ ){

      const td = document.createElement("td");
      td.textContent = locations.arrayCookie[j];
      tr.appendChild(td);
 
    }
  
    
  }
  


//  }




addTableHeader();
addTableBody(objectsArray[0]);
addTableBody(objectsArray[1]);
addTableBody(objectsArray[2]);
addTableBody(objectsArray[3]);
addTableBody(objectsArray[4]);
//addTableFooter();


/*
<table>
 <thead>
  <tr>
  loop creating a th each time displaying the hours[i] 
    <th>hours[0]</th>
    <th>hours[1]</th>
    <th>hours[2]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
    <th>hours[0]</th>
  </tr>
 </thead> 
Function to make the store location row loop
<tbody>
  <tr>
    loop based on amount of loacations
    <td>Location.name</td>
    loop 15 times
    <td>arrayCookie[0]</td>
  </tr>
</tbody>
<tfooter>
  <tr>
    <td>Totals</td>
  </tr>
</tfooter>
*/



// makeCookieDiv(seattle);
// makeCookieLi(seattle);
// makeCookieDiv(Tokyo);
// makeCookieLi(Tokyo);
// makeCookieDiv(Dubai);
// makeCookieLi(Dubai);
// makeCookieDiv(Paris);
// makeCookieLi(Paris);
// makeCookieDiv(Lima);
// makeCookieLi(Lima);
