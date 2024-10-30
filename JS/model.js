//model

const appDiv = document.getElementById("app");
const model = {
  app: {
    pages: [
      "userLoginPage",
      "registerUserPage",
      "userProfilePage",
      "mainFeedPage",
      "chatInboxPage",
      "chatRoomPage",
      "adminPage",
      "feedProfilePage"
    ],
    currentPage: "userLoginPage",
  }, // app Syntax


  input: {
    loginUser: {
      id: null,
      username: null,
      password: null,
      logInMesssage: "",
    }, //loginInputs Syntax

    profile: {
      selectedUser: 0,
      selectedMatch: null,
      selectedProfileUser: null,
    },

    registerUser: {
      id: null,
      username: null,
      password: null,
      passwordConfirm: null,
      email: null,
      errorMessage: "",

      name: null,
      gender: null,
      location: null,
      age: null,

      showWomen: false,
      showMen: false,
      userOwner: null,
      bio: "",
      interests: [],
      liked: [],
      disliked: [],
      feed: [],
      mcClub: "",

      userIMG: "",
      userImages: [],

      isPrincessCat: false,
      agreedToEULA: true,
    }, //registerInputs Syntax

    messagesInput: {
      messageToPush: null,
    }, //Messages Syntax
  }, //Inputs Syntax

  data: {
    users: [
      {
        id: 0,
        username: "Roger",
        password: "123",
        email: "roger@gmail.com",
        isAdmin: true,
        owner: null,
        showMen: false,
        showWomen: true,
        name: "Roger",

        gender: "male",
        age: 34,
        location: "Larvik",
        bio: "lorem ipsum sin dalor",
        interests: ["Ting 1", "Ting 2", "Ting 3", "Ting 4"],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        feed: [],
        mcClub: "Hells Angels",
        userIMG: "Assets/Roger IMGS/1.png",
        userImages: ["Assets/Roger IMGS/1.png", "Assets/Roger IMGS/2.png", "Assets/Roger IMGS/3.png", "Assets/Roger IMGS/4.png"],
      },
      {
        //Male Users
        id: 1,
        username: "Andreas",
        password: "123",
        email: "andreas@getacademy.no",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWomen: true,
        name: "Andreas",

        gender: "male",
        age: 28,
        location: "Lakselv",
        bio: "Love to travel and explore new cultures.",
        interests: ["Teknologi", "Gaming", "Pumpe"],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        feed: [],
        mcClub: "Lakselv Bandidos",
        userIMG: "Assets/Boycats/boycat1.webp",
        userImages: ["Assets/Boycats/boycat4.webp","Assets/Boycats/boycat9.webp"],
      },



      //Female Users


      {
        id: 2,
        username: "Emma",
        password: "123",
        email: "emma.brown@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWomen: false,
        name: "Emma",

        gender: "female",
        age: 25,
        location: "Oslo",
        bio: "Food lover and chef.",
        interests: ["Cooking", "Food"],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        feed: [],
        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat1.webp",
        userImages: ["Assets/Girlcats/girlcat1.webp"],
      },
      {
        id: 3,
        username: "Anna",
        password: "123",
        email: "olivia.williams@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWomen: false,
        name: "Anna",

        gender: "female",
        age: 30,
        location: "Bergen",
        bio: "Bookworm and writer.",
        interests: ["Reading", "Writing"],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        feed: [],
        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat2.webp",
        userImages: ["Assets/Girlcats/girlcat2.webp"],
      },
      ], //Users Syntax
  }, //Data Syntax
}; //Model Syntax