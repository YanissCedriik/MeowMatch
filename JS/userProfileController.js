function goToProfile() {
    model.app.currentPage = model.app.pages[2]
    changeView();
}

function createImagesStreamProfile() {
    let createImagesStreamHtml = '';
    let currentUser = model.data.users[model.input.profile.selectedUser];
    for (let i = 1; i < currentUser.userImages.length; i++) {
        createImagesStreamHtml += /*HTML*/ `
        <img src="${model.data.users[model.input.profile.selectedUser].userImages[i]}">`;
    }

    return createImagesStreamHtml;
}


function createChosenInterests() {
    let createSelectedInterests = '';
    let currentUser = model.data.users[model.input.profile.selectedUser];
    for (let i = 0; i < currentUser.interests.length; i++) {
        createSelectedInterests += /*HTML*/ `
        <button onclick="removeInterest(${i})">${currentUser.interests[i]}</button>
        `;
    }

    return createSelectedInterests ;
}


function createAllInterests() {
    let createAllInterestsHtml = '';
    let currentUser = model.data.users[model.input.profile.selectedUser];
    for (let i = 0; i < currentUser.interestsBox.length; i++) {
        createAllInterestsHtml += /*HTML*/ `
        <button onclick="addInterest('${currentUser.interestsBox[i]}')">${currentUser.interestsBox[i]} </button>`;
    }
    
    return createAllInterestsHtml ;
}

function addInterest(interest) {
    let chosenInterests = model.data.users[model.input.profile.selectedUser];
    
    if (chosenInterests.interests.includes(interest) ){
        console.log("allerede valgt")
        return
    }
        chosenInterests.interests.push(interest);
        chosenInterests.interestsBox = chosenInterests.interestsBox.filter(item => item !== interest);
    
        updateUserProfileView()
    }

function removeInterest(index) {
    let selectedUser = model.data.users[model.input.profile.selectedUser]
    let splicedInterest = selectedUser.interests.splice(index,1)[0];
    if (splicedInterest && !selectedUser.interestsBox.includes(splicedInterest)) {
        selectedUser.interestsBox.push(splicedInterest);
    }
    updateUserProfileView()
}