function updateAdminView() {
  let bannedUsers = model.data.adminPage.bannedUser;
  adminPage = /*HTML*/ `
    <h1>Hello ${
      model.data.users[model.input.profile.selectedUser].username
    }</h1>
    <h2>This is your private Cyber-prison</h2>
    <div>${model.input.loginUser.logInMesssage}</div>
   <div class="perps">${showPrisoners(bannedUsers)}</div>
    ${createFooter()}
   `;
  appDiv.innerHTML = adminPage;
}

function showPrisoners(bannedUsers) {
  let prisonersHtml = "";
  for (
    let prisonerIndex = 0;
    prisonerIndex < bannedUsers.length;
    prisonerIndex++
  ) {
    let prisonerId = bannedUsers[prisonerIndex];
    let prisoner = model.data.users.find((user) => user.id === prisonerId);
    if (prisoner) {
      prisonersHtml += /*HTML*/ `
      <div class= "mainContainer">
      <div class="prison-cell">
    <div class="bars">
        <div></div>
        <div></div>
        <div><img src="${prisoner.userImages[0]}"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <p>Prisoner Name: <strong>${prisoner.username}</strong></p>
    <button onclick="releaseUser(${prisonerId})">Release</button>
</div>
</div>
        
        `;
    }
  }
  return prisonersHtml;
}
