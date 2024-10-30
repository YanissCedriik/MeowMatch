function updateMainFeedView(){
    const onePerson = showEm();
    console.log("update oneP:", onePerson)
    if(!onePerson){
       appDiv.innerHTML = /*HTML*/ `
       <div class="mainFeedContainer">
           <strong>There are no users left to display in the feed.<strong>
       </div>
   `;
       return;
    }
    model.input.profile.selectedProfileUser = onePerson.id;
    console.log("onePerson id:",  model.data.users[model.input.profile.selectedProfileUser])
    console.log("onePerson updateView:", onePerson);
       mainFeedPage = /*HTML*/`
       <div class="mainFeedContainer">
       <div class="outerCard">
           <div class="innerCard">
           <div class="userIMG"><img onclick="goToFeedProfile()" src="${onePerson.userImages[0]}"></div>
           <div class="userProfileName"><div><span>${onePerson.username}</span></div></div>
           <div class="imgStream">${imgStreamOnePerson(onePerson)}</div>
               <div class="userLocation"><img src="Assets/Icons/geo-alt.svg"><span>${onePerson.location}</span></div>
               <div class="userInterests">${interestsOnePerson(onePerson)}</div>
               <div class="userBio">${onePerson.bio}</div>
   
           </div>
       </div>
   
       <div class="dislikeButton">
           <img src="Assets/Icons/x.svg" onclick="dislike()">
       </div>
        ${isAdmin()}
       <div class="likeButton">
           <img src="Assets/Icons/heart-fill.svg" onclick="like()">
       </div>
   </div>
       `
       appDiv.innerHTML = mainFeedPage;
   }
   
   function interestsOnePerson(onePerson){
    console.log("oneP2:", onePerson);
    let interestHtml = '';
    for(let interestIndex = 0; interestIndex < onePerson.interests.length; interestIndex++){
        interestHtml += /*HTML*/ `
        ${onePerson.interests[interestIndex]}, `;
    }
    return interestHtml;
}

function imgStreamOnePerson(onePerson){
    console.log("oneP3:", onePerson);
    let imgStreamHtml = '';
    for(let imgIndex = 1; imgIndex < onePerson.userImages.length; imgIndex++){
        imgStreamHtml += /*HTML*/ `
        <div style ="height: 50px; width: 50px;"><img src="${onePerson.userImages[imgIndex]}"></div>`;
    }
    return imgStreamHtml;
}

function isAdmin(){
if(!model.data.users[model.input.profile.selectedUser].isAdmin){
        return '';}
if(model.data.users[model.input.profile.selectedUser].isAdmin){
    let banBtn = '';
    banBtn = /*HTML*/ `
    <button onclick="banUser()">Ban user</button>`;
    return banBtn;
}

}