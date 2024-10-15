function findUserNamePassword() {
    let inputUserName = model.input.loginUser.username;
    let inputUserPassword = model.input.loginUser.password;
    let user = findUsers(inputUserName, inputUserPassword);
    if (user) {
        model.input.profile.selectedUser = user.Id;
        console.log("login ok. userId:", user.Id);
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
        // console.log("current user: ", currentUser.username);
        if (currentUser.username === inputUserName && currentUser.password === inputUserPassword) {
            return currentUser;
        }

    }
    return null
}

function getValueUsername(valueUsername) {
    model.input.loginUser.username = valueUsername.value;
    // console.log("username: ", model.input.loginUser.username);
}

function getValuePassword(valuePassword) {
    model.input.loginUser.password = valuePassword.value;
    // console.log("password: ", model.input.loginUser.password);
}
