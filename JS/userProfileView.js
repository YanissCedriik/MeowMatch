function updateUserProfileView() {
    let currentUser = model.data.users[model.input.profile.selectedUser];
    userProfilePage = /*HTML*/`
    
    <div class="mainContainerProfile">
        <div class="innercardProfile">

            <div class="profileImages">
                <div class="mainProfileImage">
                    ${currentUser.userIMG}
                </div>

                <div class="subProfileImages">
                    ${createImagesStreamProfile()}
                </div>
            </div>

            <div class="userBio">
                <h4>Bio</h4>
                <div>${currentUser.bio}</div>
                <input type="text" placeholder="Tell us about yourself" class="bioInput">
            </div>

            <div class="userClub">
                <h4>MC-klubb</h4>
                <div>${currentUser.mcClub}</div>
                <input type="text" placeholder="Skriv om din MC-klubb. " class="bioInput">
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

// function createImgStream() {
//     let html = '';
//     for (let index = 0; index < model.users[index].userImages.length; index++) {
//         html += /*HTML*/`
//         <div>model.users.userImages[0]</div>
//         <div>model.users.userImages[1]</div>
//         <div>model.users.userImages[2]</div>
//         <div>model.users.userImages[3]</div>
//         `
//     }
//     return html;
// }

// function createBio() {
//     let html = '';
//     for (let index = 0; model.users[index]) { }
// }

// <div class="selectInterests">
{/* <button>"Cats" (the musical)</button>
<button>Riding Motorcycles</button>
<button>Bike Rallies</button>
<button>Selfie Sessions</button>
<button>Customizing Bikes</button>
<button>Chasing Laser Pointers</button>
<button>Catnip Rallies</button>
<button>"My Cat from Hell"</button>
<button>Photography</button>
<button>Music</button>
<button>Milkshake Breaks</button>
<button>Paw-some Wheelies</button>
<button>Surfing</button>
<button>Bad Cat Poses</button>
<button>Gourmet Cat Treats</button>
<button>"The Office"</button>
<button>Fastest Lick Contest</button>
<button>Revving</button>
<button>Traveling</button>
<button>Purring</button>
<button>Gaming</button>
<button>Movies</button>
<button>"Puss in Boots"</button>
<button>Netflix</button>
<button>Parkour</button>
<button>Frisbee</button>
<button>Archery</button>
<button>Martial Arts</button>
<button>Dodgeball</button>
<button>"Catfish"</button>
<button>Water</button>
<button>Loud Noises</button>
</div> */}