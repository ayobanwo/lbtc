let submitButton  = document.querySelector('.next-btn');

submitButton.addEventListener('click', e =>{

    let priorDenomination = document.querySelector('#priorDenomination').value;
    let salvationExperience = document.querySelector('#salvationExperience').value;
    let pastorName = document.querySelector('#pastorName').value;
    let pastorChurch = document.querySelector('#pastorChurch').value;
    let pastorTown = document.querySelector('#pastorTown').value;
    let currentLocalChurch = document.querySelector('#currentLocalChurch').value;
    let currentLocalPastor = document.querySelector('#currentLocalPastor').value;
    let currentChurchLocation = document.querySelector('#currentChurchLocation').value;
    let churchRole = document.querySelector('#churchRole').value;
    let churchRoleDuration = document.querySelector('#churchRoleDuration').value;
    let commitmentPlan = document.querySelector('commitmentPlan').value;
    let affiliationName1 = document.querySelector('#affiliationName1').value;
    let affiliationPurpose1 = document.querySelector('#affiliationPurpose1').value;
    let affiliationPastor1 = document.querySelector('#affiliationPastor1').value;
    let affiliationLocation1 = document.querySelector('#affiliationLocation1').value;
    let affiliationCommitmentLevel1 = document.querySelector('#affiliationCommitmentLevel1').value;
    let affiliationCommitmentPlan1 = document.querySelector('#affiliationCommitmentPlan1').value;
    let otherAffiliationPurpose1 = document.querySelector('#otherAffiliationPurpose1').value;
    let affiliationName2 = document.querySelector('#affiliationName2').value;
    let affiliationPurpose2 = document.querySelector('#affiliationPurpose2').value;
    let affiliationPastor2 = document.querySelector('#affiliationPastor2').value;
    let affiliationLocation2 = document.querySelector('#affiliationLocation2').value;
    let affiliationCommitmentLevel2 = document.querySelector('#affiliationCommitmentLevel2').value;
    let affiliationCommitmentPlan2 = document.querySelector('#affiliationCommitmentPlan2').value;
    let otherAffiliationPurpose2 = document.querySelector('#otherAffiliationPurpose2').value;
    let scholarshipMinistry = document.querySelector('#scholarshipMinistry').value;
    let date = document.querySelector('#date').value;
    let duration = document.querySelector('#duration').value;
    let specialization = document.querySelector('#specialization').value;
    let certificate = document.querySelector('#certificate').value;
    let knowCBC = document.querySelector('#knowCBC').value;
    
    

    let data = [priorDenomination, salvationExperience, pastorName, pastorChurch, pastorTown, currentLocalChurch, currentLocalPastor, currentChurchLocation, churchRole, churchRoleDuration, commitmentPlan, affiliationName1, affiliationPastor1, affiliationPurpose1, affiliationLocation1, affiliationCommitmentLevel1, affiliationCommitmentPlan1, otherAffiliationPurpose1, affiliationName2, affiliationPastor2, affiliationPurpose2, affiliationLocation2, affiliationCommitmentLevel2, affiliationCommitmentPlan2, otherAffiliationPurpose2, scholarshipMinistry, date, duration, specialization, certificate, knowCBC];
    data.forEach(element => {
        console.log(element);
    });
    sessionStorage.setItem('priorDenomination', priorDenomination);
    sessionStorage.setItem('salvationExperience', salvationExperience);
    sessionStorage.setItem('pastorName', pastorName);
    sessionStorage.setItem('pastorChurch', pastorChurch);
    sessionStorage.setItem('pastorTown', pastorTown);
    sessionStorage.setItem('currentLocalChurch', currentLocalChurch);
    sessionStorage.setItem('currentLocalPastor', currentLocalPastor);
    sessionStorage.setItem('currentChurchLocation', currentChurchLocation);
    sessionStorage.setItem('churchRole', churchRole);
    sessionStorage.setItem('churchRoleDuration', churchRoleDuration);
    sessionStorage.setItem('commitmentPlan', commitmentPlan);
    sessionStorage.setItem('affiliationName1', affiliationName1);
    sessionStorage.setItem('affiliationPastor1', affiliationPastor1);
    sessionStorage.setItem('affiliationPurpose1', affiliationPurpose1);
    sessionStorage.setItem('affiliationLocation1', affiliationLocation1);
    sessionStorage.setItem('affiliationCommitmentLevel1', affiliationCommitmentLevel1);
    sessionStorage.setItem('affiliationCommitmentPlan1', affiliationCommitmentPlan1);
    sessionStorage.setItem('otherAffiliationPurpose1', otherAffiliationPurpose1);
     sessionStorage.setItem('affiliationName2', affiliationName2);
    sessionStorage.setItem('affiliationPastor2', affiliationPastor2);
    sessionStorage.setItem('affiliationPurpose2', affiliationPurpose2);
    sessionStorage.setItem('affiliationLocation2', affiliationLocation2);
    sessionStorage.setItem('affiliationCommitmentLevel2', affiliationCommitmentLevel2);
    sessionStorage.setItem('affiliationCommitmentPlan2', affiliationCommitmentPlan2);
    sessionStorage.setItem('otherAffiliationPurpose2', otherAffiliationPurpose2);
    sessionStorage.setItem('scholarshipMinistry', scholarshipMinistry);
    sessionStorage.setItem('date', date);
    sessionStorage.setItem('duration', duration);
    sessionStorage.setItem('specialization', specialization);
    sessionStorage.setItem('certificate', certificate);
    sessionStorage.setItem('knowCBC', knowCBC);
} )
