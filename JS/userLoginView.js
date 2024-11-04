function updateUserLoginView(){
    loginPage = /*HTML*/ `
    
    <div class="login-container">
        <h1>Velkommen!</h1>
        <input type="text" placeholder="Username..." class="input-field" oninput="model.input.loginUser.username=this.value">
        <form>
        <input type="password" placeholder="Password..." autocomplete="password" class="input-field" oninput="model.input.loginUser.password=this.value">
        </form>
        <button class="btn-signin" onclick="findUserNamePassword()">Logg inn</button>
        <button onclick="updateRegisterView()" class="btn-new">Jeg er ny her</button>
        ${model.input.loginUser.logInMesssage}
        </div>

    `
    appDiv.innerHTML = loginPage;
}

