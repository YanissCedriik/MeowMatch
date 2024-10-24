function updateFeedProfileView(){
    let html = '';
    html += /*HTML*/ `

    <div>
        <img src="${model.data.users[model.input.profile.selectedProfileUser].userIMG}">
        <div>${model.data.users[model.input.profile.selectedProfileUser].gender}</div>
        <div>${model.data.users[model.input.profile.selectedProfileUser].name}</div>
        <div>${model.data.users[model.input.profile.selectedProfileUser].age}</div>
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
    `;

    appDiv.innerHTML = html;
}

function createImagesStream(){
    let createImagesStreamHtml = '';
    
    for(let i = 0; i < model.data.users[model.input.profile.selectedProfileUser].userIMGSProfile.length; i++){
        createImagesStreamHtml += /*HTML*/ `
        <div>${model.data.users[model.input.profile.selectedProfileUser].userIMGSProfile[i]}</div>`;
    }
    return createImagesStreamHtml;
}

function createInterestedInGender(){
    let createInterestedInGenderHtml = '';
    let prefer = model.data.users[model.input.profile.selectedProfileUser].showMen;

    if (prefer == true){
        createInterestedInGenderHtml += /*HTML*/ <span>Interessert i Jentepuser</span>;
    }   else{
        createInterestedInGenderHtml += /*HTML*/ <span>Interessert i Guttepuser</span>;
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
