

function updateMainFeedView() {
    const mainFeedPage = /*HTML*/ `
       ${drawMainFeed()}
    `;
    appDiv.innerHTML = mainFeedPage;
}

function goToMainFeed(){
    model.app.currentPage = model.app.pages[3];
    changeView();
}


function determanGenderSelection() {
    const selectedUser = model.data.users[model.input.profile.selectedUser];
    if (selectedUser.gender === "male" && selectedUser.showWoman) return femaleUsers;
    if (selectedUser.gender === "female" && selectedUser.showMen) return maleUsers;
    return [];
}



//selectedGenderArray can be either maleUsers[i] or femaleUsers[i] (based on selectedUser gender-preferance)
function drawMainFeed(selectedGenderArray) {
    let mainFeedUserHTML = "";
    
    selectedGenderArray = determanGenderSelection() 

    console.log(selectedGenderArray)




    for (let i = 0; i < selectedGenderArray.length; i++) {
        let imgIndexHTML = "";
        let interestIndexHTML = "";

        // Build profile images HTML
        if (selectedGenderArray[i].userIMGSProfile.length > 0) {
            for (let imgIndex = 0; imgIndex < selectedGenderArray[i].userIMGSProfile.length; imgIndex++) {
                imgIndexHTML += /*HTML*/ `<img src="${selectedGenderArray[i].userIMGSProfile[imgIndex]}">`;
            }
        }

        // Build interests HTML
        if (selectedGenderArray[i].interests.length > 0) {
            for (let interestIndex = 0; interestIndex < selectedGenderArray[i].interests.length; interestIndex++) {
                interestIndexHTML += /*HTML*/ `<span>${selectedGenderArray[i].interests[interestIndex]},</span>`;
            }
        }

        // Combine all HTML
        mainFeedUserHTML += /*HTML*/ `
        <div class="mainFeedContainer">
            <div class="outerCard">
                <div class="innerCard">
                    ${imgIndexHTML}                                                    
                    <div class="userProfileName"><span>${selectedGenderArray[i].username} ${selectedGenderArray[i].age}</span></div>
                    <div class="userLocation"><img src="Assets/Icons/geo-alt.svg"><span>${selectedGenderArray[i].location}</span></div>
                    <div class="userInterests">${interestIndexHTML}</div>
                    <div class="userBio">${selectedGenderArray[i].bio}</div>
                </div>
            </div>

            <div class="dislikeButton">
                <img src="Assets/Icons/x.svg">
            </div>

            <div class="likeButton">
                <img onclick="likeButton()" src="Assets/Icons/heart-fill.svg">
            </div>
        </div>
        `;
    }
    
    return mainFeedUserHTML;
}