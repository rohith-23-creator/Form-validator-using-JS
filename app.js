const form = document.getElementById("form");
const username = document.getElementById("Name");
const email= document.getElementById("Email");
const password = document.getElementById("Password");
const password2 = document.getElementById("Password2");

function validInput(input){
    const inputGroup = input.parentElement;
    inputGroup.className = "input-group success"
    
}

function InValidInput(input , message){
    const inputGroup = input.parentElement;
    inputGroup.className = "input-group error"
    const small = inputGroup.querySelector("small");
    small.innerText = message
}


function checkEmail(input) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())){
            validInput(input);
        }else {
            InValidInput(input , "Email is invalid")
        }
}

function checkInput(inputArr){
    inputArr.forEach(input=> {
      if(input.value.trim() === ""){
          InValidInput(input , `${input.id} is required`)
      }else{
          validInput(input)
      }
    });
}


function usernameLen(input ,min ,max){
    if (input.value.length < min){
        InValidInput(input , `${input.id} must be atleast ${min} characters`);
    }else if(input.value.length > max){
        InValidInput(input ,  `${input.id} must be less than ${max} characters`);
    }else{
        validInput(input)
    }
}


function passwordLen(input ,min ,max){
    if (input.value.length < min){
        InValidInput(input , `${input.id} must be atleast ${min} characters`);
    }else if(input.value.length > max){
        InValidInput(input ,  `${input.id} must be less than ${max} characters`);
    }else{
        validInput(input)
    }
}

function passwordValidation(input1 , input2){
    if(input1.value != input2.value){
       InValidInput(input2 , "Passwords dont match")
    }
}


form.addEventListener("submit" , function(e){
    e.preventDefault();
 
   checkInput([username , email , password ,password2]);
   usernameLen(username , 3, 20);
   passwordLen(password , 6 , 20);
   checkEmail(email);
   passwordValidation(password , password2)
    
});