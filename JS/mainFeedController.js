
let i = 0;

function goToMainFeed(){
    model.app.currentPage = model.app.pages[3];
    changeView();
}


function drawMatches(selectedArray, i){
    let mainFeedHTML = "";
    for (let i = 0; i < model.data.users.length;) { 
            mainFeedHTML += /*HTML*/ `
           
            <div class="mainFeedContainer">
            <div class="outerCard">
                <div class="innerCard">
                    <img src="Assets/Girlcats/girlcat1.webp">
                    <div class="userProfileName"> <span>${model.data.users[i].age}</span></div>
                    <div class="userLocation"><img src="${model.data.users[i].userIMGSProfile}"><span>${model.data.users[i].location}</span></div>
                    <div class="userInterests">${model.data.users.users[i].interests}</div>
                    <div class="userBio">${model.data.users[i].bio}</div>
                </div>
            </div>
        
            <div class="dislikeButton">
                <img src="Assets/Icons/x.svg">
            </div>
        
            <div class="likeButton">
                <img onclick="likeButton()" src="Assets/Icons/heart-fill.svg">
            </div>
        </div>
            `
       }
};

function likeButton(i){
    
    model.data.likedUsers.push(model.data.users[i])

}

function disLikeButton(){

}



// 1. Lage kopi av model.data.users
// 2. Sortere model.data.user i kjønn  mann || kvinne
// 3. Printe ut model.data.users i mainfeed
// 4. Legg til en funksjon som gjør at når du liker blir index +1
// 5. Når du liker en bruker pusher du brukeren inn i inboxView og slicer vekk fra arrayet som vises i mainFeed.
