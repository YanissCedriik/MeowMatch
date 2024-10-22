function goToMainFeed(){
    model.app.currentPage = model.app.pages[3];
    changeView();
}


function drawMatchesMainFeed(){
    let mainFeedUserHTML = "";
    let interestIndex = 0;
    
    for (let i = 0; i < model.data.users.length; i++) {
        let imgIndexHTML = "";
        let interestIndexHTML = "";
        
        
        if (model.data.users[i].userIMGSProfile.length > 1){
           //Bygger profilbilder HTML
            for (let imgIndex = 0; imgIndex < model.data.users.userIMGSProfile.length; imgIndex++) {  
                    imgIndexHTML += /*HTML*/ ` <img src="${model.data.users.userIMGSProfile[imgIndex]}">
                    
                    `
              }
            
        }

        if(model.data.users[i].interests[interestIndex].length > 1){
            //Bygger interesser HTML
            for (let interestIndex = 0; i < model.data.users.interests.length; interestIndex++) {    
                interestIndexHTML += /*HTML*/ ` <div>${model.data.users.interests[interestIndex]}</div>
                
                ` 
            }
        }
          
        
        
        
        
        //Legger sammen all HTML
        mainFeedUserHTML = /*HTML*/ `
        <div class="mainFeedContainer">
            <div class="outerCard">
                <div class="innerCard">
                    ${imgIndexHTML}
                    <div class="userProfileName"> <span>${model.data.users[i].age}</span></div>
                    <div class="userLocation"><img src="Assets/Icons/geo-alt.svg"><span>${model.data.users[i].location}</span></div>
                    <div class="userInterests">${interestIndexHTML}</div>
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

    `}  return mainFeedUserHTML;
}







// Chat GPT sier:

function drawMatchesMainFeed() {
    let mainFeedUserHTML = "";

    for (let i = 0; i < model.data.users.length; i++) {
        let imgIndexHTML = ""; // Reset for each user
        let interestIndexHTML = ""; // Reset for each user

        // Build profile images HTML
        if (model.data.users[i].userIMGSProfile.length > 1) {
            for (let imgIndex = 0; imgIndex < model.data.users[i].userIMGSProfile.length; imgIndex++) {
                imgIndexHTML += /* HTML */ `<img src="${model.data.users[i].userIMGSProfile[imgIndex]}">`;
            }
        }

        // Build interests HTML
        if (model.data.users[i].interests.length > 0) {
            for (let interestIndex = 0; interestIndex < model.data.users[i].interests.length; interestIndex++) {
                interestIndexHTML += /* HTML */ `<div>${model.data.users[i].interests[interestIndex]}</div>`;
            }
        }

        // Append user HTML to mainFeedUserHTML
        mainFeedUserHTML += /* HTML */ `
        <div class="mainFeedContainer">
            <div class="outerCard">
                <div class="innerCard">
                    ${imgIndexHTML}
                    <div class="userProfileName"><span>${model.data.users[i].age}</span></div>
                    <div class="userLocation"><img src="Assets/Icons/geo-alt.svg"><span>${model.data.users[i].location}</span></div>
                    <div class="userInterests">${interestIndexHTML}</div>
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
        `;
    }

    // Return or use the generated HTML as needed
    return mainFeedUserHTML; // Example of returning the HTML
}






<div class="mainFeedContainer">
<div class="outerCard">
    <div class="innerCard">
        <img src="${model.data.users[i].userIMG}">
        <div class="userProfileName"> <span>${model.data.users[i].age}</span></div>
        <div class="userLocation"><img src="Assets/Icons/geo-alt.svg"><span>${model.data.users[i].location}</span></div>
        <div class="userInterests">${interestHtml}</div>
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





//Hvis arrayet inneholder mer enn 1 punkt. Sjekk resten av arrayet.

// 1. Lage kopi av model.data.users
// 2. Sortere model.data.user i kjønn  mann || kvinne
// 3. Printe ut model.data.users i mainfeed
// 4. Legg til en funksjon som gjør at når du liker blir index +1
// 5. Når du liker en bruker pusher du brukeren inn i inboxView og slicer vekk fra arrayet som vises i mainFeed.