function updateChatInboxView() {
  chatInboxPage = /*HTML*/ `
    
    <div class="mainContainerChatroomInbox">
        <div class="outerCardMatches">
            <div class="innerCardMatches">
                ${drawPreviewMatches()}
            </div>
        </div>

        <div class="outerCardChats">
            <div class="innerCardChats">

                ${drawPreviewMatchesWithChat()}

            </div>
        </div>
    </div>
    
    `;
  appDiv.innerHTML = chatInboxPage;
}


function drawPreviewMatches(){
    let selectedUser = model.data.users[model.input.profile.selectedUser];
    let likedPersonHtml = '';

    
    for (let i = 0; i < selectedUser.liked.length; i++) {   
        let likedUserId = selectedUser.liked[i];
        let likedUser = model.data.users.find(user => user.id === likedUserId);
        
        if(likedUser){
        likedPersonHtml += /*HTML*/ `
        
        <img onclick="goToChatRoom(${likedUserId})" src="${likedUser.userImages[0]}">
        `}
    };
     return likedPersonHtml;
}


function drawPreviewMatchesWithChat(){
    let selectedUser = model.data.users[model.input.profile.selectedUser];
    let likedPersonAndChatHtml = '';

    
    for (let i = 0; i < selectedUser.liked.length; i++) {   
        let likedUserId = selectedUser.liked[i];
        let likedUser = model.data.users.find(user => user.id === likedUserId);
        
        if(likedUser){
            likedPersonAndChatHtml += /*HTML*/ `
        <div onclick="goToChatRoom(${likedUserId})" class="chatMatchPreview">
            <div class="smallPreviewImage"><img src=${likedUser.userImages[0]}></div>
            <span class="name">${likedUser.name} : </span>
            <span class="message"> Meeeeeeoooow?</span>
        </div>
        `}
    };
     return likedPersonAndChatHtml;
}