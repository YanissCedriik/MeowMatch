function changeView() {
    let currentPage = model.app.currentPage;
    let pageNumber = model.app.pages;
    console.log("currentPage:", currentPage);

    if (currentPage == pageNumber[0]) {
        updateUserLoginView();
    }
    else if (currentPage == pageNumber[1]) {
        updateRegisterView();
    }
    else if (currentPage == pageNumber[2]) {
        updateUserProfileView();
    }
    else if (currentPage == pageNumber[3]) {
        updateMainFeedView();
    }
    else if (currentPage == pageNumber[4]) {
        updateChatInboxView();
    }
    else if (currentPage == pageNumber[5]) {
        updateChatRoomView();
    }
    else if (currentPage == pageNumber[6]) {
        updateAdminView();
    }
    else if (currentPage == pageNumber[7]) {
        updateFeedProfileView();
    }
}

function createHeader() {
    let headerHtml = '';
    headerHtml = /*HTML*/ `
 <header class="header">
    <img src="Assets/Logo/38160610.jpg" class="logo">
    <button onclick="goToLogOut()" class="button"><img src="Assets/Icons/box-arrow-right.svg"></button>
 </header>`;
    return headerHtml;
}

function createFooter() {
    let footerHtml = '';
    footerHtml = /*HTML*/`
    <footer>
    <button onclick= "goToMainFeed()"><img src="Assets/Icons/heart-half.svg"></button>
    <button onclick="goToAdminPage()"><img src="Assets/Icons/grid-3x3-gap-fill.svg"></button>
    <button onclick=  "goToMatches()"><img src="Assets/Icons/inbox-fill.svg"></button>
    <button onclick=  "goToProfile()"><img src="Assets/Icons/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"></button>
</footer>
`;
return footerHtml;

}