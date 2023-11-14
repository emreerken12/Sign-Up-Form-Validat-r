const form = document.getElementById("form");
const username = document.getElementById("username")
const mail = document.getElementById("email")
const password = document.getElementById("password")
const repassword = document.getElementById("repassword")
const phone = document.getElementById("phone");



function error(input,message){
    input.className= "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback"
}

function succes(input){
    input.className= "form-control is-valid";
}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
     
  };

  function check(inputs) {
    inputs.forEach(function(input) {
      if (input.value === "") {
        error(input, `${input.id} is required. `);
      } else {
        succes(input);
      }
    });
  }


  function isLength(input, min, max) {
    if (input.value.length < min) {
      error(input, `${input.id} must be at least ${min} characters long.`);
    } else if (input.value.length > max) {
      error(input, `${input.value} must be maximum ${max} characters long.`);
    } else {
        succes(input);
    }
  }

function isEqual(input1, input2){
    if(input1.value !== input2.value){
        error(input2,"eşleşmedi")
    }
}



function checkPhone(input){
    if(input.value.length<10 || input.value.length>10 ){
        error(input,"10 karakterli olmalıdır")
    }
}





form.addEventListener("submit",function(e){
 e.preventDefault();


check([username,mail,password,repassword]);

isLength(username, 6 ,12);
isLength(password , 8 , 20);
isLength (repassword , 8 ,20);
isEqual (password,repassword);
checkPhone(phone)

if(!validateEmail(mail.value)){
        error(mail,"düzgün bir mail adresi gir")};











// if(username.value === ""){
//     error(username, "username can not be empty");
// }else {
//     succes(username);
// }

// if(mail.value === ""){
//     error(mail , "email can not be empty"); 
// }else if(!validateEmail(mail.value)){
//     error(mail,"düzgün bir mail adresi gir")
// }
// else{
//     succes(mail);
// }  


// if(password.value === ""){
//     error(password, "password can not be empty");
// }else {
//    succes(password);
// }

// if(repassword.value === ""){
//     error(repassword ,"repassword can not be empty");
// }else {
//     succes(repassword);
// }

})