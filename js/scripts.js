var akana = function() {
    var days = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday", "Thursday" , "Friday"
    ]
    var maleNames = [ "Kwasi" , "Kwadwo" , "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"]
    var femaleNames = ["Akosua" , "Adwoa" , "Abenaa" , "Akua" , "Yaa" , "Afua" , "Ama"]
    };
    var year = parseInt(document.getElementById("year").value);
    var month = ParseInt(document.getElementsById("month").value);
    var day = parseInt(document.getElementsById("day").value);
    var birthday = new Date(year + "/" + month + "/" + "day");
    var results = birthday.getDay();
    var output = document.getElementById("output");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    
    if (month =="" && year =="" && day =="" && name=="") {
        alert("Please Enter you credentials");
        return false;
        }
    if (year < 0) {
    output.innerHTML = "Please" + name + "enter a valid year of birth"
    }
    
    else if ((month < 1) || (month > 12)) {
    output.innerHTML = "Please" + name + "enter a valid month"
    }
    else if ((day < 0) || (day > 31)) {
    output.innerHTML = "Please" + name + "enter a valid date of birth"
    }
    if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
          output.innerHTML = "Maakayé " + name + " you were born on a " + days[results] + " and your Akan name is " + maleNames[results];
    }
    if(female.checked && year> 0 && month > 0 && month < 12 && day > 0 && day < 32) {
        output.innerHTML = "Maakayé" + name + " you were born on a " + days[results] + " and your Akan name is " + femaleNames[results];
    }
}