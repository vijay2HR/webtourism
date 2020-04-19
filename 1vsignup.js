let email=document.getElementById("email");
let error=document.getElementById("error");
let phonenumber=document.getElementById("phonenumber");
let error1=document.getElementById("error1");
let password = document.getElementById("psw");
let repeatpassword = document.getElementById("psw-repeat");




function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let password3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let x=0;
    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        error.style.border="2px solid green";
        x++;
    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        error.style.border="2px solid red";
    }
    if(phonenumber.value.match(phoneno)){
        error1.innerHTML="Valid";
        error1.style.color="green";
        error1.style.border="2px solid green";
        x++;
       
        // return true;
    }
    else{
        error1.innerHTML="Invalid";
        error1.style.color="red";
        error1.style.border="2px solid red";
        // return false;
    }
    if(password.value.match(password3)){
        error2.innerHTML="Valid";
        error2.style.color="green";
        error2.style.border="2px solid green";
        x++;
        // return true;
    }
    else{
        error2.innerHTML="Invalid";
        error2.style.color="red";
        error2.style.border="2px solid red";
        // return false;
    }
    if(repeatpassword.value.match(password)){
        error3.innerHTML="Password Matching";
        error3.style.color="green";
        error3.style.border="2px solid green";
        x++;
    }
    else{
        error3.innerHTML="Password not Matching";
        error3.style.color="red";
        error3.style.border="2px solid red";
    }

    // if(regexp.test(email.value) === true && phonenumber.value.match(phoneno) === true && password.value.match(password3) === true)
    // {
    //     ++x;
    // }
    // console.log("value of var x="+x)
    if(x>=4){
        return true;
    }
    else{
        return false;
    }
}
//     from here password
function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");
   
    var password_strength=document.getElementById("password_strength");
                 //TextBox left blank.
            if (password.length == 0) {
                password_strength.innerHTML = "";
                // return;
            }
     
            //Regular Expressions.
            var regex1 = new Array();
            regex1.push("[A-Z]"); //Uppercase Alphabet.
            console.log("value of regx1="+regex1);
            regex1.push("[a-z]"); //Lowercase Alphabet.
            console.log("value of regx1="+regex1);
            regex1.push("[0-9]"); //Digit.
            console.log("value of regx1="+regex1);
            regex1.push("[$@$!%*#?&]"); //Special Character.
            console.log("value of regx1="+regex1);
     
            var passed = 0;//CHECK THE TYPE OF EXPRESSION
     
            //Validate for each Regular Expression.
            for (var i = 0; i < regex1.length; i++) 
            {
                console.log("value of i after FOR statement and before if statement"+i);
                if (new RegExp(regex1[i]).test(password)) 
                {
                    passed++;
                }
            }//end of FOR
            console.log("after first loop passed="+passed);
     
            //Validate for length of Password.
            if (passed > 2 && password.length >= 8) {
                passed++;
            }
            console.log("after second loop passed="+passed);
            //Display status.
            var color = "";
            var strength = "";
            switch (passed) {
                case 0:
                            console.log("value of passed after case 0"+passed);
                case 1:
                    strength = "Weak";
                    color = "red";
                    console.log("value of passed after case 1  "+passed);
                    break;
                case 2:
                    strength = "Good";
                    color = "darkorange";
                    console.log("value of passed after case 2  "+passed);
                    break;
                case 3:
                case 4:
                    strength = "Strong";
                    color = "green";
                    console.log("value of passed after case 4  "+passed);
                    break;
                case 5:
                    strength = "Very Strong";
                    color = "darkgreen";
                    console.log("value of passed after case 5  "+passed);
                    break;

            }
            password_strength.innerHTML = strength;
            password_strength.style.color = color;
}

    



