function updateMainFeedView(){
    const onePerson = showEm();
    console.log("update oneP:", onePerson)
    if(!onePerson){
       appDiv.innerHTML = /*HTML*/ `
       <div class="mainFeedContainer">
           <p>There are no users left to display in the feed.</p>
       </div>
   `;
       return;
    }
    model.input.profile.selectedProfileUser = onePerson.Id;
    console.log("onePerson Id:",  model.data.users[model.input.profile.selectedProfileUser])
    console.log("onePerson updateView:", onePerson);
       mainFeedPage = /*HTML*/`
       <div class="mainFeedContainer">
       <div class="outerCard">
           <div class="innerCard">
           <div class="userProfileName"><div onclick="goToFeedProfile()"><span>${onePerson.username}</span></div></div>
           <div class="userIMG" style="height:100px; width: 100px"><img src="${onePerson.userIMGSProfile[0]}"></div>
           <div class="imgStream">${imgStreamOnePerson(onePerson)}</div>
               <div class="userLocation"><img src="Assets/Icons/geo-alt.svg"><span>${onePerson.location}</span></div>
               <div class="userInterests">${interestsOnePerson(onePerson)}</div>
               <div class="userBio">${onePerson.bio}</div>
   
           </div>
       </div>
   
       <div class="dislikeButton">
           <img src="Assets/Icons/x.svg" onclick="dislike()">
       </div>
   
       <div class="likeButton">
           <img src="Assets/Icons/heart-fill.svg" onclick="like()">
       </div>
   </div>
       `
       appDiv.innerHTML = mainFeedPage;
   }
   
   