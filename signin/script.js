let submitButton  = document.querySelector('.signIn-btn');

submitButton.addEventListener('click', e => {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


    let dataObj = {
        email,
        password,
    }

    console.log(dataObj);

    fetch("https://lightstream-app.herokuapp.com/api/user/login", {
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