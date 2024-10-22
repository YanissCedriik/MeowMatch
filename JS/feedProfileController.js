
function createImagesStream(){
let createImagesStreamHtml = '';

for(let i = 0; i < model.data.users[model.input.profile.selectedProfileUser].userIMGSProfile.length; i++){
    createImagesStreamHtml += /*HTML*/ `
    <div>${model.data.users[model.input.profile.selectedProfileUser].userIMGSProfile[i]}</div>`;
}

    return createImagesStreamHtml;
}

