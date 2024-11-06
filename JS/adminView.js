function updateAdminView() {

    let bannedUsers = model.data.adminPage.bannedUser;
    adminPage = /*HTML*/`
<div class="topInfo">
    <h1>Hello ${model.data.users[model.input.profile.selectedUser].username}</h1>
    <h3>This is your private Cyber-prison</h3>
</div>
    <div>${model.input.admin.adminMessage}</div>
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
    <p>Inmate Name:<br><strong>${prisoner.username}</strong></p>
    ${prisoner.isPrincessCat ? "Crime:<strong>PrincessCat</strong>" : ""}
    ${prisoner.isImposter ? "Crime:<br><strong>Perv</strong>" : ""}
    ${!prisoner.isImposter && !prisoner.isPrincessCat ? "Crime:<br><strong>Peeing in public</strong>" : ""}
<div>
    <button onclick="releaseUser(${prisonerId})">Release</button>
</div> `;
        }
    }
    return prisonersHtml;
}

// function randomCrime(){
// let crimes = ['Blasphemy','Fighting', 'Shat in wrong garden', 'Jaywalking', 'Peeing in public'];
// let randomNum = Math.floor(Math.random()*array.length);
// return crimes[randomNum];
// }