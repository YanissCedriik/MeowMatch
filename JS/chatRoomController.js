function sendMessage() {
  let timestamp = new Date().toLocaleString();
  let newMessage = {
    sender: model.data.users[model.input.profile.selectedUser].username,
    receiver: model.data.users[model.input.profile.selectedMatch].username,
    text: model.input.messagesInput.messageToPush,
    time: timestamp,
  };
  model.data.chatRooms.push(newMessage);
  updateChatRoomView();
}

function filterMessages() {
  let currentUser = model.data.users[model.input.profile.selectedUser];
  let selectedMatch = model.data.users[model.input.profile.selectedMatch];

  let messages = model.data.chatRooms.filter(
    (msg) =>
      (msg.sender === currentUser.username &&
        selectedMatch.username === msg.receiver) ||
      (msg.receiver === currentUser.username &&
        selectedMatch.username === msg.sender)
  );

  let messageHTML = "";
  for (let i = 0; i < messages.length; i++) {
    let message = messages[i];

    messageHTML += /*HTML*/ `
        
    <div>${message.sender}
        <div>${message.text}</div>
        <div>${message.time}</div>
    </div>

    `;
  }
  return messageHTML;
}
