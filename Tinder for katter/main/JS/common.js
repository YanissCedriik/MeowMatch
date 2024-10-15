function changeView() {
    let currentPage = model.app.currentPage;
    let pageNumber = model.app.pages;

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

}

function goToLogOut(){
    model.app.currentPage = model.app.pages[0];
    changeView();
}
function goToProfile(){
    model.app.currentPage = model.app.pages[2];
    changeView();
}

function goToMainFeed(){
    model.app.currentPage = model.app.pages[3];
    changeView();
}

function goToMatches(){
    model.app.currentPage = model.app.pages[4];
    changeView();
}
