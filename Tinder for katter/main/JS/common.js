function changeview(){
    if (model.app.currentPage === 'userLogin'){
        updateViewUserLogin();
    }
    else if(model.app.currentPage === 'registerUser'){
        updateViewRegisterUser();
    }
    else if(model.app.currentPage === 'userProfile'){
        updateViewUserProfile();
    }
    else if(model.app.currentPage === 'mainFeed'){
        updateViewMainFeed();
    }
    else if(model.app.currentPage === 'chatInbox'){
        updateViewChatinbox();
    }
    else if(model.app.currentPage === 'chatRoom'){
        updateViewChatRoom();
    }
    else if(model.app.currentPage === 'adminPage'){
        updateViewAdminPage();
    }
}

function findUsers(){
    let html = '';
    for(let index = 0; model.data.user[index].length; index++){

    }
}