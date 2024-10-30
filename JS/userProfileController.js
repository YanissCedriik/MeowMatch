function goToProfile() {
    model.app.currentPage = model.app.pages[2]
    changeView();
}

function createImagesStreamProfile() {
    let createImagesStreamHtml = '';
    let currentUser = model.data.users[model.input.profile.selectedUser];
    for (let i = 0; i < currentUser.userImages.length; i++) {
        createImagesStreamHtml += /*HTML*/ `
        <div>${currentUser.userImages[i]}</div>`;
    }

    return createImagesStreamHtml;
}


function createChosenInterests() {
    let createSelectedInterests = '';
    let currentUser = model.data.users[model.input.profile.selectedUser];
    for (let i = 0; i < currentUser.interests.length; i++) {
        createSelectedInterests += /*HTML*/ `
        <button>${currentUser.interests[i]}</button>
        `;
    }

    return createSelectedInterests ;
}


function createAllInterests() {
    let createAllInterestsHtml = '';
    let currentUser = model.data.users[model.input.profile.selectedUser];
    for (let i = 0; i < currentUser.interestsBox.length; i++) {
        createAllInterestsHtml += /*HTML*/ `
        <button onclick="addInterest(this.value)">${currentUser.interestsBox[i]} </button>`;
    }
    
    return createAllInterestsHtml ;
}

function addInterest(interest) {
let chosenInterests = model.data.users[model.input.profile.selectedUser].interests

if (chosenInterests.includes(interest) ){
    console.log("allerede valgt")
    return
}
}


function removeInterest() {

}