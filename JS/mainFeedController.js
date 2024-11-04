function goToMainFeed(){
    model.app.currentPage = model.app.pages[3];
    changeView();
}

function showEm(){
    selectedUser = model.data.users[model.input.profile.selectedUser];
    
    let personArray = filterMenWomen();
    personArray = personArray.filter(user => !selectedUser.liked.includes(user.id) && !selectedUser.disliked.includes(user.id) && !model.data.adminPage.bannedUser.includes(user.id));
    console.log("personarray:", personArray)
    let randomNum = Math.floor(Math.random()*personArray.length)
    console.log("randomNum:", randomNum)
    let foundPerson = personArray[randomNum];
    console.log("foundPerson:", foundPerson);
    return foundPerson;
}

function filterMenWomen() {
    selectedUser = model.data.users[model.input.profile.selectedUser];
    if(selectedUser.gender === 'male'){
    return model.data.users.filter(user => user.showMen);
    }
    if(selectedUser.gender === 'female'){
        return model.data.users.filter(user => user.showWomen);
    }
}

function like(){
selectedUser = model.data.users[model.input.profile.selectedUser];
selectedUser.liked.push(model.input.profile.selectedProfileUser);
console.log("liked:", model.input.profile.selectedProfileUser);
console.log("liked array:", model.data.users[0].liked)
updateMainFeedView();
}

function dislike(){

model.data.users[model.input.profile.selectedUser].disliked.push(model.input.profile.selectedProfileUser);
console.log("disliked:", model.input.profile.selectedProfileUser);
updateMainFeedView();   
}

function banUser(){
    model.data.adminPage.bannedUser.push(model.input.profile.selectedProfileUser);
    console.log("banned:", model.input.profile.selectedProfileUser);
    updateMainFeedView();
}

function goToFeedProfile(){
    model.app.currentPage = model.app.pages[7];
    changeView();
}