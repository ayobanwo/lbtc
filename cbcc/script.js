let submitButton  = document.querySelector('.next-btn');

submitButton.addEventListener('click', e =>{

    let speakTongue = document.querySelector('#speakTongue').value;
    let hermeneutics = document.querySelector('#hermeneutics').value;
    let salvation = document.querySelector('#salvation').value;
    let church = document.querySelector('#church').value;
    let discipleship = document.querySelector('#discipleship').value;
    let understanding = document.querySelector('#understanding').value;
    let thinkMinistry = document.querySelector('#thinkMinistry').value;
    let planMinistry = document.querySelector('#planMinistry').value;
    let expectation = document.querySelector('#expectation').value;
    let objectives = document.querySelector('#objectives').value;
    

    let data = [speakTongue, hermeneutics, salvation, church, discipleship, understanding, thinkMinistry, planMinistry, expectation, objectives];
    data.forEach(element => {
        console.log(element);
    });
    sessionStorage.setItem('speakTongue', speakTongue);
    sessionStorage.setItem('hermeneutics', hermeneutics);
    sessionStorage.setItem('salvation', salvation);
    sessionStorage.setItem('church', church);
    sessionStorage.setItem('discipleship', discipleship);
    sessionStorage.setItem('understanding', understanding);
    sessionStorage.setItem('thinkMinistry', thinkMinistry);
    sessionStorage.setItem('planMinistry', planMinistry);
    sessionStorage.setItem('expectation', expectation);
    sessionStorage.setItem('objectives', objectives);
} )





