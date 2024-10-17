function updateUserLoginView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div class="login-container">
        <h1>Velkommen!</h1>
        <input type="text" placeholder="Username..." class="input-field" oninput="model.input.loginUser.username=this.value">
        <input type="password" placeholder="Password..." class="input-field" oninput="model.input.loginUser.password=this.value">
        <button class="btn-signin" onclick="findUserNamePassword()">Logg inn</button>
        <button onclick="updateRegisterView()" class="btn-new">Jeg er ny her</button>
    </div>
    `
}