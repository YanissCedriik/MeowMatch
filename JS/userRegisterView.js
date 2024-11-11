
function updateRegisterView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    ${createHeader()}
    <div class="login-container">
        <h1>Ny bruker</h1>
        
        <input type="text" placeholder="Brukernavn..." onchange="model.input.registerUser.username=this.value" class="input-field">
        <input type="email" autocomplete="email" placeholder="email..."onchange="model.input.registerUser.email=this.value"class="input-field">
        <form>
        <input type="password" autocomplete="password" placeholder="Passord..."onchange="model.input.registerUser.password=this.value"class="input-field">
        <input type="password" autocomplete="password" placeholder="Confirm Passord..."onchange="model.input.registerUser.passwordConfirm=this.value"class="input-field">
        </form>
        <input type="number" placeholder="Alder..."onchange="model.input.registerUser.age=this.value"class="input-field">
        <div>Jeg er :</div>
        <label class="radio-label">
            <input type="radio" value="male"name="gender" onchange="model.input.registerUser.gender=this.value">Pusegutt
        </label>
        <label class="radio-label">
            <input type="radio" value="female" name="gender" onchange="model.input.registerUser.gender=this.value">Pusejente
        </label>

        <input type="text" placeholder="By... "onchange="model.input.registerUser.location=this.value" class="input-field">
        <div>Vis meg...</div>
        <div>
            <label class="checkbox-label">
                <input type="checkbox" class="styled-checkbox" id="men" onchange="model.input.registerUser.showMen=this.checked">
                <span>Pusegutter</span>
            </label>
            <label class="checkbox-label">
                <input type="checkbox" class="styled-checkbox" id="women" onchange="model.input.registerUser.showWomen=this.checked">
                <span>Pusejenter</span>
            </label>
        </div>

        <div>
        <label class="checkbox-label">
                <input type="checkbox" class="styled-checkbox" id="women" onchange="model.input.registerUser.isPrincessCat=this.checked">
                <span>isPrincessCat?</span>
            </label>
        </div>
        <button onclick="registerNewUser()" class="btn-new">Start Swiping</button>
        <div>${model.input.registerUser.errorMessage}</div>
    </div>
    
`
}

//checkbox - prøv ternary operator
