'use strict'
function uniqueFourDigitsEmployeeIdNumber() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}
console.log(uniqueFourDigitsEmployeeIdNumber())

function information(nm, ty, pr) {
    this.foodid = uniqueFourDigitsEmployeeIdNumber(),
        this.name = nm,
        this.type = ty,
        this.price = pr
}
let food1 = document.getElementById('table');

information.prototype.render = function () {
    let fo1 = document.createElement('tr');
    table.appendChild(fo1);
    let fo2 = document.createElement('td');
    id.textContent = this.foodid;
    fo1.appendChild(fo2);
    let fo3 = document.createElement('td');
    name1.textContent = this.name;
    fo1.appendChild(fo3);
    let fo4 = document.createElement('td');
    type1.textContent = this.type;
    fo1.appendChild(fo4);
    let fo5 = document.createElement('td');
    price1.textContent = this.price;
    fo1.appendChild(fo5);
    let fot1 = document.createElement('tr');
    table.appendChild(fot1);
    let fot2 = document.createElement('td');
    id.textContent = this.foodid;
    fot1.appendChild(fot2);
    let fot3 = document.createElement('td');
    name1.textContent = this.name;
    fot1.appendChild(fot3);
    let fot4 = document.createElement('td');
    type1.textContent = this.type;
    fot1.appendChild(fot4);
    let fot5 = document.createElement('td');
    price1.textContent = this.price;
    fot1.appendChild(fot5);
    let fota1 = document.createElement('tr');
    table.appendChild(fota1);
    let fota2 = document.createElement('td');
    id.textContent = this.foodid;
    fota1.appendChild(fota2);
    let fota3 = document.createElement('td');
    name1.textContent = this.name;
    fota1.appendChild(fota3);
    let fota4 = document.createElement('td');
    type1.textContent = this.type;
    fota1.appendChild(fota4);
    let fota5 = document.createElement('td');
    price1.textContent = this.price;
    fota1.appendChild(fota5);
}

let inputfield = document.getElementById('Name');
inputfield.addEventListener('change', function (e) {
    console.log(e.target.value)

})
let inputfield2 = document.getElementById('type');
inputfield2.addEventListener('change', function (e) {
    console.log(e.target.value)

})
let inputfield3 = document.getElementById('price');
inputfield3.addEventListener('change', function (e) {
    console.log(e.target.value)

})
let saveValues = document.getElementById('foodForm');
// Add a listener for the Form 
saveValues.addEventListener('submit', handler)

function handler(e) {
    e.preventDefault();
    let foodName = e.target.name.value;
    let type1 = e.target.value;
    let price = e.target.price.value;



    let food = new information(name, type, price);
    food.render();
}
