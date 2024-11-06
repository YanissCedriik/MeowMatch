enterPressLogIn()

function findUserNamePassword() {
    let inputUserName = model.input.loginUser.username;
    let inputUserPassword = model.input.loginUser.password;
    let user = findUsers(inputUserName, inputUserPassword);
    if (user) {
        model.input.profile.selectedUser = user.id;
        console.log("login ok. selectedUserId:", user.id);
        goToProfile();
    }
    else {
        console.log("login failed, wrong input");
        updateUserLoginView();
    }
}


function findUsers(inputUserName, inputUserPassword) {
    for (let index = 0; index < model.data.users.length; index++) {
        let currentUser = model.data.users[index];
        console.log("current user: ", currentUser.username);
        if (currentUser.username === inputUserName && currentUser.password === inputUserPassword) {
            return currentUser;
        }
    }
    return null;
}


function goToLogOut(){
    model.app.currentPage = model.app.pages[0];
    changeView();
}


function enterPressLogIn() {
    
    if (model.app.currentPage === "userLoginPage"){ 
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            findUserNamePassword();
        }
    });
} else return
}

