function registerNewUser() {
    let regMessage = model.input.registerUser.errorMessage;
    let foundUserIndex = findUserIndex();
    let regUser = model.input.registerUser;
    if (regUser.username && regUser.password && regUser.email && regUser.name && regUser.gender && regUser.location && regUser.age) {
        if (model.input.registerUser.password === model.input.registerUser.passwordConfirm) {
            if (foundUserIndex === null) {

                let regUser = {
                    Id: model.data.users.length,
                    username: model.input.registerUser.username,
                    password: model.input.registerUser.password,
                    email: model.input.registerUser.email,
                    isAdmin: false,
                    owner: null,
                    showWomen: model.input.registerUser.showWomen,
                    showMen: model.input.registerUser.showMen,

                    name: model.input.registerUser.name,
                    gender: model.input.registerUser.gender,
                    location: model.input.registerUser.location,
                    age: model.input.registerUser.age,

                    bio: '',
                    interests: [],
                    mcClub: '',

                    userIMG: '',
                    userImages: [],
                };
                model.data.users.push(regUser);

                console.log("object pushed:", regUser);
                regMessage = `Registration complete!`;
                goToLogOut();
            } else {
                regMessage = `Username already taken.`;
                updateRegisterView();
            }
        } else {
            regMessage = `Passwords don't match.`;
            updateRegisterView();
        }
    } else {
        regMessage = `Fill out every input.`;
        updateRegisterView();
    }

}

function findUserIndex() {
    let inputUsername = model.input.registerUser.username;
    console.log("username:", inputUsername);
    for (let userIndex = 0; userIndex < model.data.users.length; userIndex++) {
        let indexOfUser = model.data.users[userIndex].username;
        if (indexOfUser === inputUsername) {
            return userIndex;
        }
    }
    return null;
}