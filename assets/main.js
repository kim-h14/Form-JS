// Example starter JS for disabling form submissions if there are invalid fields

(function(){
  'use strict'

  // Declare the form
  let form = document.getElementById('lessonForm');
  
  // Listening for submit action and function's launching 
  form.addEventListener('submit', function(event){
    Array.from(form.elements).forEach((input) => {
      if (input.type !== "submit"){
        if(!validateFields(input)){
          
          event.preventDefault();
          event.stopPropagation();

          input.classList.remove('is-valid');
          input.classList.add('is-valid');
          input.nextElementSibling.style.display = 'block';
        }
        else{
          input.nextElementSibling.style.display = 'none';
          input.classList.remove('is-invalid');
          input.classList.add('is-valid'); 
        }
      }
    });
  }, false)

})()

// Validation for required field
function validateRequired(input) {
  return !(input.value == null || input.value == "");
}

// MIN and MAX characters validation
function validateLength(input, minLength, maxLength){
  return !(input.value.length < minLength || input.value.length > maxLength);
}

// Latin letters validation
function validateText(input){
  return input.value.match('^[A-Za-z]+$');
}

// Email validation
function validateEmail(input) {
  let EMAIL = input.value;
  let POSAT = EMAIL.indexOf('@');
  let POSDOT = EMAIL.indexOf('.');
  
  return !(POSAT < 1 || (POSDOT - POSAT < 2));
}

// Phone number validation
function validatePhoneNumber(input){
  return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
}

// Address validation: number and street name
function validateAddress(input) {
  return input.value.match(/^\s*\S+(?:\s+\S+){2}/);
}

// Postcode validation 
function validatePostCode(input) {
  return input.value.match('^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$');
}

// Checkbox validation
function validateConditions(input) {
  return input.checked;
}

function validateFields(input) {

  let fieldName = input.name;

  // firstName input validation 
  if (fieldName == 'firstName') {
    if (!validateRequired(input)) {
      return false;
    }
    if (!validateLength(input, 2, 20)) {
      return false;
    }
    if (!validateText(input)){
      return false;
    }
    return true;
  }

// lastName input validation
  if (fieldName == 'lastName') {
    if (!validateRequired(input)){
      return false;
    }
    if (!validateLength(input, 2, 20)) {
      return false;
    }
    if (!validateText(input)) {
      return false;
    }
    return true;
  }
// email input validation
  if (fieldName == "email") {
    if (!validateEmail(input)){
      return false;
    }
    return true;
  }

// Phone number input validation
  if (fieldName == "phoneNumber") {
    if (!validateRequired(input)){
        return false;
    }
    if (!validatePhoneNumber(input)) {
        return false;
    }
    return true;
  }

// City input validation
  if (fieldName == 'city'){
    if (!validateRequired(input)){
      return false;
    }
    return true;
  }

// PostCode input validation
  if (fieldName == "postCode") {
    if (!validatePostCode(input)) {
      return false;
    }
    return true;
  }

// Address input validation
  if (fieldName == "address") {
    if(!validateAddress(input)){
      return false;
    }
    return true;
  }

  // Checkbox input validation
  if (fieldName == "conditions") {
    if (!validateConditions(input)) {
      return false;
    }
    return true;
  } 
}

// ========= END - FIELD VALIDATION ==========
