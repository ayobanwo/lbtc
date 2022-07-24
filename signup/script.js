let submitButton  = document.querySelector('.signIn-btn');

submitButton.addEventListener('click', e => {
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#password2').value;
    let phone = document.querySelector('#phone').value;

    let dataObj = {
        firstName,
        lastName,
        email,
        password,
        password2,
        phone
    }

    console.log(dataObj);

    fetch("https://lightstream-app.herokuapp.com/api/user/register", {
        method: 'post',
        body: JSON.stringify(person),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response){
        return response.json();
    }).then(function (responseData){
      console.log(responseData);
      let message = responseData.message;
      return message;
    }).catch(function (error){
        console.log(error);
    })
})