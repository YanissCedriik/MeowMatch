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

// Id: 1,
// username: "sophia92",
// password: "password123",
// email: "sophia92@example.com",
// isAdmin: false,
// owner: null,
// showWoman: false,
// showMen: true,

// //name: "Sophia Johnson",
// gender: "female",
// location: "Larvik",
// age: 28,

// bio: "Lover of art and nature. Always seeking adventure!",
// interests: ["painting", "hiking", "photography", "reading"],
// mcClub: "Hells Angels",

// userIMG: "/Assets/Gircats/girlcat1.webp",
// userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],