
let email=document.getElementById("email");
let error=document.getElementById("error");
let error1=document.getElementById("error1");
let password = document.getElementById("psw");
function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let password3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let x=0;
    //let regexp=/^(\w\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        error.style.border="2px solid green";
        x++;
    }
    else{
        error.innerHTML="Enter your valid email";
        error.style.color="red";
        error.style.border="2px solid red";
    }
    if(password.value.match(password3)){
        error1.innerHTML="Valid";
        error1.style.color="green";
        error1.style.border="2px solid green";
        x++;
    }
    else{
        error1.innerHTML="Invalid";
        error1.style.color="red";
        error1.style.border="2px solid red";
    }
    if(x>=2){
        return true;
    }
    else{
        return false;
    }
    
}
//     from here password
function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");
   
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