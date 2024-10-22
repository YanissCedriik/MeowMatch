function updateChatRoomView() {
  chatRoomPage = /*HTML*/ `
    
    <div class="chatRoomContainer">
    <div class="innerCardChat">
        <div class="matchNameAndImage">
            <img src="Assets/Girlcats/girlcat12.webp">
            <span>Placeholder Name</span>
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
