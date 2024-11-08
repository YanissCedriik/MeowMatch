function updateUserProfileView() {
  let currentUser = model.data.users[model.input.profile.selectedUser];
  userProfilePage = /*HTML*/ `
    ${createHeader()}
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
                
                <input 
                onchange="model.data.users[model.input.profile.selectedUser].bio = this.value" 
                type="text" 
                
                placeholder="${currentUser.bio}" 
                class="bioInput">
            </div>

            <div class="userClub">
                <h4>MC-klubb</h4>

                <input 
                onchange="model.data.users[model.input.profile.selectedUser].mcClub = this.value" 
                type="text" 
                
                placeholder="${currentUser.mcClub}" 
                class="bioInput">
            </div>

            



            <div><h4>My Interests (Max 8)</h4></div>
            <div class="userSelectedInterests">
               ${createChosenInterests()} 
            </div>
            
            <h4>Select Interests:</h4>
            <div class="selectInterests">
                ${createAllInterests()}
            </div>
               
                         
        </div>
        </div>
        
        ${createFooter()}


    `;
  appDiv.innerHTML = userProfilePage;
}
