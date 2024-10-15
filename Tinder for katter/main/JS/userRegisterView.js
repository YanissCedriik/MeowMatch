
function updateRegisterView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="login-container">
        <h1>Ny bruker</h1>
        <input type="text" placeholder="Brukernavn..." class="input-field">
        <input type="email" autocomplete="email" placeholder="email..." class="input-field">
        <input type="password" placeholder="Passord..." class="input-field">
        <input type="password" placeholder="Confirm Passord..." class="input-field">
        <input type="datetime-local" placeholder="Alder..." class="input-field">
        <div>Jeg er :</div>
        <label class="radio-label">
            <input type="radio" name="gender">Mann
        </label>
        <label class="radio-label">
            <input type="radio" name="gender">Dame
        </label>

        <input type="text" placeholder="By..." class="input-field">
        <div>Vis meg...</div>
        <div>
            <label class="checkbox-label">
                <input type="checkbox" class="styled-checkbox" id="men">
                <span>Menn</span>
            </label>
            <label class="checkbox-label">
                <input type="checkbox" class="styled-checkbox" id="women">
                <span>Damer</span>
            </label>
        </div>
        <button onclick="updateMainFeedView()" class="btn-new">Start Swiping</button>
    </div>
`
}