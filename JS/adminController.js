function releaseUser(prisonerId){
let index = model.data.adminPage.bannedUser.indexOf(prisonerId);
let prisoner=model.data.users.find(user=> user.id === prisonerId)
model.input.loginUser.logInMesssage = `<strong>${prisoner.username}</strong> just got an early release`;
model.data.adminPage.bannedUser.splice(index, 1)
updateAdminView();
}

function goToAdminPage(){
    let admin = model.data.users[model.input.profile.selectedUser].isAdmin;
    if(admin){
    model.app.currentPage = model.app.pages[6];
    changeView();
    }
    else{
    model.input.loginUser.logInMesssage = `Not admin`;
    changeView();
    }
}
