'use strict'
function uniqueFourDigitsEmployeeIdNumber() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}
console.log(uniqueFourDigitsEmployeeIdNumber())

function information(nm,ty,pr){
    this .foodid=uniqueFourDigitsEmployeeIdNumber(),
    this.name=nm,
    this.type=ty,
    this.price=pr
}
 



let inputfield=document.getElementById('Name');
inputfield.addEventListener('change',function(e){
    console.log(e.target.value)

})
let inputfield2=document.getElementById('type');
inputfield2.addEventListener('change',function(e){
    console.log(e.target.value)

})
let inputfield3=document.getElementById('price');
inputfield3.addEventListener('change',function(e){
    console.log(e.target.value)

})
information.prototype.greeting = function () {
    
    document.write(` ID: ${this.id}<br>Name :${this.name} <br> Type:${this.type}<br> Price${this.price} `);
}


 