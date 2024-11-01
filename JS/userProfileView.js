function updateUserProfileView() {
    let currentUser = model.data.users[model.input.profile.selectedUser];
    userProfilePage = /*HTML*/`
    
    <div class="mainContainerProfile">
        <div class="innercardProfile">

            <div class="profileImages">
                <div class="mainProfileImage">
                    <img src="${currentUser.userImages[0]}">
                </div>

                <div class="subProfileImages">
                    ${createImagesStreamProfile()}
                </div>
            </div>

            <div class="userBio">
                <h4>Bio</h4>
                
                <input type="text" placeholder="${currentUser.bio}" class="bioInput">
            </div>

            <div class="userClub">
                <h4>MC-klubb</h4>

                <input type="text" placeholder="${currentUser.mcClub}" class="bioInput">
            </div>

            



            <div><h4>My Interests (Max 8)</h4></div>
            <div class="userSelectedInterests">
                ${currentUser.interests}
            </div>
            
            <h4>Select Interests:</h4>
            <div class="selectInterests">
                <button onclick=addInterest(this.innerText)>Riding Motorcycles</button>
                <button onclick=addInterest(this.innerText)>Surfing</button>
                <button onclick=addInterest(this.innerText)>"The Office"</button>
                <button onclick=addInterest(this.innerText)>Gaming</button>
                <button onclick=addInterest(this.innerText)>Netflix</button>
                <button onclick=addInterest(this.innerText)>Parkour</button>
                <button onclick=addInterest(this.innerText)>Martial Arts</button>
                <button onclick=addInterest(this.innerText)>FurryBallin'</button>
            </div>
               
                         
        </div>
    </div>




    `
    appDiv.innerHTML = userProfilePage;
}