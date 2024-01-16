import React from "react";
import ReactDOM from "reactdom";

ReactDOM.render()

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector(".copyright1").innerHTML=currentYear;


var Name = document.getElementById("name").value;
var mail = document.getElementById("email").value;
var Phone = document.getElementsById("phone").value;
var Message = document.getElementById("message").value;

document.getElementById("but").addEventListener("click", function(){
    if(!Name || !mail || !Phone || !Message){
        alert("Please fill out all fields before submitting.");
    }
    else if(!ValidateEmail(mail)) {
            alert('Please enter a valid email address.');
    }
    else{
            alert("Form submitted successfully!");
    }
   
})


function validateEmail(mail){
    // Simple email validation, you may want to use a more robust method
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
}