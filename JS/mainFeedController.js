function goToMainFeed(){
    model.app.currentPage = model.app.pages[3];
    changeView();
}

function showEm(){
    selectedUser = model.data.users[model.input.profile.selectedUser];
    
    let personArray = filterMenWomen();
    personArray = personArray.filter(user => !selectedUser.liked.includes(user.Id) && !selectedUser.disliked.includes(user.Id));
    console.log("personarray:", personArray)
    let randomNum = Math.floor(Math.random()*personArray.length)
    console.log("randomNum:", randomNum)
    let foundPerson = personArray[randomNum];
    console.log("foundPerson:", foundPerson);
    return foundPerson;
}

function filterMenWomen() {
    if(model.data.users[model.input.profile.selectedUser].gender === 'male'){
    return model.data.users.filter(user => user.showMen);
    }
    if(model.data.users[model.input.profile.selectedUser].gender === 'female'){
        return model.data.users.filter(user => user.showWoman);
    }
}

function interestsOnePerson(onePerson){
    console.log("oneP2:", onePerson);
    let interestHtml = '';
    for(let interestIndex = 0; interestIndex < onePerson.interests.length; interestIndex++){
        interestHtml += /*HTML*/ `
        ${onePerson.interests[interestIndex]}, `;
    }
    return interestHtml;
}

function imgStreamOnePerson(onePerson){
    console.log("oneP3:", onePerson);
    let imgStreamHtml = '';
    for(let imgIndex = 1; imgIndex < onePerson.userIMGSProfile.length; imgIndex++){
        imgStreamHtml += /*HTML*/ `
        <div style ="height: 50px; width: 50px;"><img src="${onePerson.userIMGSProfile[imgIndex]}"></div>`;
    }
    return imgStreamHtml;
}

function like(){
model.data.users[model.input.profile.selectedUser].liked.push(model.input.profile.selectedProfileUser);
console.log("liked:", model.input.profile.selectedProfileUser);
console.log("liked array:", model.data.users[0].liked)
updateMainFeedView();
}

function dislike(){

model.data.users[model.input.profile.selectedUser].disliked.push(model.input.profile.selectedProfileUser);
console.log("disliked:", model.input.profile.selectedProfileUser);
updateMainFeedView();
    
}

function goToFeedProfile(){
    model.app.currentPage = model.app.pages[7];
    changeView();
}