
function updateRegisterView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="login-container">
        <h1>Ny bruker</h1>
        <input type="text" placeholder= "Brukernavn..." class="input-field">
        <input type="email" autocomplete="email" placeholder= "email..." class="input-field">
        <input type="password" placeholder= "Passord..." class="input-field">
        <input type="password" placeholder= "Confirm Passord..." class="input-field">
        <input type="datetime-local" placeholder= "Alder..." class="input-field">
        <input type="datetime-local" placeholder= "Alder..." class="input-field">
        <input type="text" placeholder= "By..." class="input-field">
        <div>Jeg liker...</div>
    <div>
        <label class="checkbox-label">
            <input type="checkbox">
            Menn
        </label>
        <label class="checkbox-label">
            <input type="checkbox">
            Damer
        </label>
    </div>
        <button class="btn-new">Start Swiping</button>
    </div>
`
}