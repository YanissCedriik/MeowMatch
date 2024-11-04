function updateAdminView() {
    let bannedUsers = model.data.adminPage.bannedUser;
    adminPage = /*HTML*/`
    <h1>AdminPage</h1>
   <div class="perps">${showPrisoners(bannedUsers)}</div>`;
    appDiv.innerHTML = adminPage;
}

function showPrisoners(bannedUsers) {
    let prisonersHtml = '';
    for (let prisonerIndex = 0; prisonerIndex < bannedUsers.length; prisonerIndex++) {
        let prisonerId = bannedUsers[prisonerIndex];
        let prisoner = model.data.users.find(user => user.id === prisonerId);
        if (prisoner) {
        prisonersHtml += /*HTML*/ `
        ${prisoner.username}
        <img src="${prisoner.userImages[0]}">
        <button onclick="releaseUser(${prisonerId})">Release</button>
        <div>${model.input.loginUser.logInMesssage}</div>
        `;
        }
    }
    return prisonersHtml;
}

