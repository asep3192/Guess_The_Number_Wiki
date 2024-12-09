
password = "2DAVIS";


inputPassword = "";

while (inputPassword != password) {
    
    
    let inputPassword = prompt("Please enter your password: ");

    if  (inputPassword == password) {
       
        alert(" Password Correct, logging in!");
        break;
    } else {
        alert("Password incorrect, Please try again :(");
       
    }
}

body.style.removeProperty("display");