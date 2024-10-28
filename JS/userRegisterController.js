function registerNewUser() {
    let foundUserIndex = findUserIndex();
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

            console.log("id pushed:", model.data.users.length);
            console.log("username pushed:", model.input.registerUser.username);
            console.log("pass pushed:", model.input.registerUser.password);
            console.log("email pushed:", model.input.registerUser.email);
            console.log("showWomen pushed: ", model.input.registerUser.showWomen);
            console.log("showMen pushed: ", model.input.registerUser.showMen);
            console.log("location pushed:", model.input.registerUser.location);
            console.log("age pushed:", model.input.registerUser.age);

            console.log("object pushed:", regUser);
            console.log("registration complete!")
            goToLogOut();
        } else {
            console.log("failed registration, same username")
        }
    } else {
        console.log("pass dont match")
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