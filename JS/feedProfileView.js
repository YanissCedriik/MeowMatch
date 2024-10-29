function updateFeedProfileView(){
    let html = '';
    html += /*HTML*/ `

    <div class="mainContainerFP">
        <div>
            <img class="profilePictureFP" src="${model.data.users[model.input.profile.selectedProfileUser].userImages[0]}">
            <div class="overlayProfilePictureFP">
                <div>${model.data.users[model.input.profile.selectedProfileUser].age}</div>
                <div>${model.data.users[model.input.profile.selectedProfileUser].name}</div>
                <div>${model.data.users[model.input.profile.selectedProfileUser].gender}</div>
            </div>
        </div>
        ${createImagesStream()}
        
        <div>${model.data.users[model.input.profile.selectedProfileUser].location}</div>

        ${createInterestedInGender()}
        
        <div>
            <div>Bio</div>
            ${model.data.users[model.input.profile.selectedProfileUser].bio}
        </div>

        <div>
            <div>Hobbyer</div>
            ${createHobbyList()}
        </div>
        
        <div>${model.data.users[model.input.profile.selectedProfileUser].mcClub}</div>
    </div>
    `;

    appDiv.innerHTML = html;
}

function createImagesStream(){
    let createImagesStreamHtml = '';
    
    for(let i = 1; i < model.data.users[model.input.profile.selectedProfileUser].userImages.length; i++){
        createImagesStreamHtml += /*HTML*/ `
        <div>${model.data.users[model.input.profile.selectedProfileUser].userImages[i]}</div>`;
    }
    return createImagesStreamHtml;
}

function createInterestedInGender(){
    let createInterestedInGenderHtml = '';
    let preferGender = model.data.users[model.input.profile.selectedProfileUser].showMen;

    if (preferGender == true){
        createInterestedInGenderHtml = /*HTML*/ `<span>Interessert i Guttepuser</span>`;
    }   else{
        createInterestedInGenderHtml = /*HTML*/ `<span>Interessert i Jentepuser</span>`;
    }
    return createInterestedInGenderHtml;
}

function createHobbyList(){
    let createHobbyListHtml = '';
    
    for(let i = 0; i < model.data.users[model.input.profile.selectedProfileUser].interests.length; i++){
        createHobbyListHtml += /*HTML*/ `
        <div>${model.data.users[model.input.profile.selectedProfileUser].interests[i]}</div>`;
    }
    return createHobbyListHtml;
}
