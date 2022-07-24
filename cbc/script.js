
let submitButton  = document.querySelector('.next-btn');

submitButton.addEventListener('click', e =>{

    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let gender = document.querySelector('#gender').value;
    let city = document.querySelector('#city').value;
    let occupation = document.querySelector('#occupation').value;
    let education = document.querySelector('#education').value;
    let others = document.querySelector('#others').value;
    let maritalStatus = document.querySelector('#maritalStatus').value;
    let dob = document.querySelector('#dob').value;
    

    let data = [firstName, lastName, gender, city, occupation, education, others, maritalStatus, dob];
    data.forEach(element => {
        console.log(element);
    });
    sessionStorage.setItem('firstName', firstName);
    sessionStorage.setItem('lastName', lastName);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('city', city);
    sessionStorage.setItem('occupation', occupation);
    sessionStorage.setItem('education', education);
    sessionStorage.setItem('others', others);
    sessionStorage.setItem('maritalStatus', maritalStatus);
    sessionStorage.setItem('dob', dob);
} )
