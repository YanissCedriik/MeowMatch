function updateMainFeedView(){
    mainFeedPage = /*HTML*/`
    <div class="mainFeedContainer">
    <div class="outerCard">
        <div class="innerCard">
            <img src="Assets/Girlcats/girlcat1.webp">
            <div class="userProfileName">Sophia <span>18 years</span></div>
            <div class="userLocation"><img src="Assets/Icons/geo-alt.svg"><span>Norway</span></div>
            <div class="userInterests">Motorbikes, Netflix</div>
            <div class="userBio">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
    </div>

    <div class="dislikeButton">
        <img src="Assets/Icons/x.svg">
    </div>

    <div class="likeButton">
        <img src="Assets/Icons/heart-fill.svg">
    </div>
</div>
    `
    appDiv.innerHTML = mainFeedPage;
}