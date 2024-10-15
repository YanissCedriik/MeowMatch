updateLoginView()
function updateLoginView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <div class="login-container">
        <h1>Velkommen!</h1>
        <input type="text" placeholder="Username..." class="input-field">
        <input type="password" placeholder="Password..." autocomplete="current-password" class="input-field">
        <button onclick= "updateMainFeedView()" class="btn-signin">Logg inn</button>
        <button onclick= "updateRegisterView()" class="btn-new">Jeg er ny her</button>
    </div>
    `
}

