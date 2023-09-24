let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let date = document.getElementById("date").value;
    let city = document.getElementById("city").value;
    let postalCode = document.getElementById("postalCode").value;
    let address = document.getElementById("address").value;
    
    let firstNameTxt = document.getElementById("firstName1");
    firstNameTxt.innerHTML += "Welcome, " + firstName;

    let lastNameTxt = document.getElementById("lastName1");
    lastNameTxt.innerHTML += "Name : " + firstName + " " + lastName;
    
    let emailTxt = document.getElementById("email1");
    emailTxt.innerHTML += "Email : " + email;
    
    let usernameTxt = document.getElementById("username1");
    usernameTxt.innerHTML += "Username : " + username;

    let dateTxt = document.getElementById("date1");
    dateTxt.innerHTML += "Birth date : " + date;

    let cityTxt = document.getElementById("city1");
    cityTxt.innerHTML += "City : " + city;

    let postalCodeTxt = document.getElementById("postalCode1");
    postalCodeTxt.innerHTML += "Postal Code : " + postalCode;

    let addressTxt = document.getElementById("address1");
    addressTxt.innerHTML += "Address : " + address;
})
