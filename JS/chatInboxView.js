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
    let selectedUser = model.data.users[model.input.profile.selectedProfileUser];
    let likedPersonHtml = '';

    
    for (let i = 0; i < selectedUser.liked.length; i++) {   
        let likedUser = model.data.users.find(user => user.Id === likedUserId);
        let likedUserId = selectedUser.liked[i];
        console.log("likedUserId:", likedUserId);
        
        console.log("likedUser:", likedUser)
        if(likedUser){
        likedPersonHtml += /*HTML*/ `
        
        <img src="${likedUser.userImages[0]}">
       
       
        `}
    };

     return likedPersonHtml;
}

function drawPreviewMatchesWithChat(){
    let selectedUser = model.data.users[model.input.profile.selectedProfileUser];
    let likedPersonAndChatHtml = "";

    for (let i = 0; i < selectedUser.liked.length; i++) {   
        likedPersonAndChatHtml += /*HTML*/ `
        
        <div class="chatMatchPreview">
                    <div class="smallPreviewImage"><img src=${selectedUser.liked[i].userImages[0]}></div>
                    <span>Name ${selectedUser.liked[i].name}</span>
                    <div>Last message preview</div>
                </div>
        `

     }

     return likedPersonAndChatHtml;
}





