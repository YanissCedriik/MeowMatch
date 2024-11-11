function registerNewUser() {
    let foundUserIndex = findUserIndex();
    let regUser = model.input.registerUser;
    if (!regUser.username || !regUser.password || !regUser.passwordConfirm || !regUser.email || !regUser.gender || !regUser.location || !regUser.age) {
        regUser.errorMessage = `Fill out every input.`;
        updateRegisterView();
        return;
    }

    if (regUser.password !== regUser.passwordConfirm) {
        regUser.errorMessage = `Passwords don't match.`;
        updateRegisterView();
        return;
    }
    if (foundUserIndex !== null) {
        regUser.errorMessage = `Username already taken.`;
        updateRegisterView();
        return;
    }

    let newUser = {
        id: model.data.users.length,
        username: regUser.username,
        password: regUser.password,
        email: regUser.email,
        isAdmin: false,
        owner: null,
        showWomen: regUser.showWomen,
        showMen: regUser.showMen,

        name: regUser.name,
        gender: regUser.gender,
        location: regUser.location,
        age: regUser.age,

        bio: '',
        interests: [],
        mcClub: '',

        userIMG: '',
        userImages: [],
        isPrincessCat: regUser.isPrincessCat,
    };
    console.log("regUsername:", model.input.registerUser.username);
    console.log("regpass:", model.input.registerUser.password);
    console.log("regemail:", model.input.registerUser.email);
    console.log("regshowWomen:", model.input.registerUser.showWomen);
    console.log("regshowmen:", model.input.registerUser.showMen);
    console.log("reggender:", model.input.registerUser.gender);
    console.log("regage:", model.input.registerUser.age);
    console.log("reglocation:", model.input.registerUser.location);
    

    model.data.users.push(newUser);
    regUser.username = '';
    regUser.password = '';
    regUser.passwordConfirm = '';
    regUser.email = '';
    regUser.name = '';
    regUser.gender = '';
    regUser.location = '',
    regUser.age = '';

    console.log("object pushed:", newUser);
    regUser.errorMessage = `Registration complete!`;
    goToLogOut();
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