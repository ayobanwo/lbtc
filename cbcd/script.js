let submitButton  = document.querySelector('.next-btn');

submitButton.addEventListener('click', e =>{
    let toc = document.querySelector('#TOC').checked;
    console.log(toc);
    sessionStorage.setItem('toc', toc);


    let data = ['firstName', 'lastName', 'gender', 'city', 'occupation', 'education', 'others', 'maritalStatus', 'dob', 'priorDenomination', 'salvationExperience', 'pastorName', 'pastorChurch', 'pastorTown', 'currentLocalChurch', 'currentLocalPastor', 'currentChurchLocation', 'churchRole', 'churchRoleDuration', 'commitmentPlan', 'affiliationName1', 'affiliationPastor1', 'affiliationPurpose1', 'affiliationLocation1', 'affiliationCommitmentLevel1', 'affiliationCommitmentPlan1', 'otherAffiliationPurpose1', 'affiliationName2', 'affiliationPastor2', 'affiliationPurpose2', 'affiliationLocation2', 'affiliationCommitmentLevel2', 'affiliationCommitmentPlan2', 'otherAffiliationPurpose2', 'scholarshipMinistry', 'date', 'duration', 'specialization', 'certificate', 'knowCBC', 'speakTongue', 'hermeneutics', 'salvation', 'church', 'discipleship', 'understanding', 'thinkMinistry', 'planMinistry', 'expectation', 'objectives', 'toc'];

    dataObj = {};

    for (let i = 0; i < data.length; i++) {
        let element = sessionStorage.getItem(data[i]);
        // console.log(element);
        dataObj[data[i]]= element;
    }

    // console.log(dataObj);

    
    fetch("https://lightstream-app.herokuapp.com/api/new/form", {
        method: 'post',
        body: JSON.stringify(dataObj),
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