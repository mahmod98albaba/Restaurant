'use strict'
function uniqueFourDigitsEmployeeIdNumber() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}
console.log(uniqueFourDigitsEmployeeIdNumber())

function Information(nm, ty, pr) {
    this.foodid = uniqueFourDigitsEmployeeIdNumber(),
        this.name = nm,
        this.type = ty,
        this.price = pr;
    this.foodid;
}
let food1 = document.getElementById('table');

Information.prototype.render = function () {
    let fo1 = document.createElement('tr');
    table.appendChild(fo1);
    let fo2 = document.createElement('td');
    fo2.textContent = this.foodid;
    fo1.appendChild(fo2);
    let fo3 = document.createElement('td');
    fo3.textContent = this.name;
    fo1.appendChild(fo3);
    let fo4 = document.createElement('td');
    fo4.textContent = this.type;
    fo1.appendChild(fo4);
    let fo5 = document.createElement('td');
    fo5.textContent = this.price;
    fo1.appendChild(fo5);

}


let saveValues = document.getElementById('foodForm');
// Add a listener for the Form 
saveValues.addEventListener('submit', handler)

function handler(e) {
    e.preventDefault();
    let foode = e.target.name1.value;
    let type1 = e.target.type.value;
    let price1 = e.target.price1.value;



    let food = new Information(foode, type1, price1);
    food.render();
}
