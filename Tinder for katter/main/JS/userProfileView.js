function updateUserProfileView(){
    
}

function createImgStream(){
    let html = '';
    for (let index=0;index <model.users[index].userIMGSProfile.length; index++){
        html += /*HTML*/`
        <div>model.users.userIMGSProfile[0]</div>
        <div>model.users.userIMGSProfile[1]</div>
        <div>model.users.userIMGSProfile[2]</div>
        <div>model.users.userIMGSProfile[3]</div>
        `
    }
    return html;
}

function createBio(){
    let bioHTML='';
    for (let i = 0; i < model.users[i].bio.length; i++) {  
        bioHTML = /*HTML*/ `
        <div>Bio</div>
        `
      }
}