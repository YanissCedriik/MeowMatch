function releaseUser(prisonerId){
let index = model.data.adminPage.bannedUser.indexOf(prisonerId);
let prisoner=model.data.users.find(user=> user.id === prisonerId)
model.input.loginUser.logInMesssage = `<strong>${prisoner.username}</strong> just got an early release`;
model.data.adminPage.bannedUser.splice(index, 1)
updateAdminView();
}

function goToAdminPage(){
    model.app.currentPage = model.app.pages[6];
    changeView();
}
