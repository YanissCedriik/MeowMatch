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
            </div>
        </div>

        <div class="chatInputfield">
            <input type="text" id="messageInput" placeholder="Type a message..." />
            <button id="sendButton">Send</button>
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