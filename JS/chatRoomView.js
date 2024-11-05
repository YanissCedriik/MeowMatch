function updateChatRoomView() {
    chatRoomPage = /*HTML*/ `
    
    <div class="chatRoomContainer">
    <div class="innerCardChat">
        <div class="matchNameAndImage">
            <img src="${likedUser.userImages[0]}" >
            <span>${likedUser.name}</span>
        </div>

        <div class="chatBackground">
            <div class="messages" id="messages">
                <!-- Messages displayed here -->
                ${filterMessages()}
            </div>
        </div>

        <div class="chatInputfield">
            <input type="text" onchange="model.input.messagesInput.messageToPush = this.value" placeholder="Type a message..." />
            <button onclick="sendMessage()">Send</button>
        </div>
        
    
    </div>
</div>
    
    `;
  appDiv.innerHTML = chatRoomPage;
}



function goToChatRoom(likedUserId) {
    model.input.profile.selectedMatch = likedUserId;
    const likedUser = model.data.users.find(user => user.id === likedUserId);
    
    
    if (likedUser) {
    
        window.likedUser = likedUser;
    }

    model.app.currentPage = model.app.pages[5];
    console.log(likedUserId);
    changeView();
}