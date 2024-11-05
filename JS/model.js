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
      messages: [],
    }, //Messages Syntax
  }, //Inputs Syntax

  data: {

    chatRooms:[],
    
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
        bio: "Liker å skru, spille på slurva og kjøre sykkel",
        interests: ["Martial Arts", "Riding Motorcycles", "Parkour",],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        messages: [],
        isPrincessCat: false,
        isImposter: false,

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
        messages: [],

        gender: "male",
        age: 28,
        location: "Lakselv",
        bio: "Love to travel and explore new cultures.",
        interests: ["Teknologi", "Gaming", "Pumpe"],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        messages: [],
        isPrincessCat: false,
        isImposter: false,

        feed: [],
        mcClub: "Lakselv Bandidos",
        userIMG: "Assets/Boycats/boycat1.webp",
        userImages: ["Assets/Boycats/boycat4.webp","Assets/Boycats/boycat9.webp"],
      },

      {
        //Male Users
        id: 2,
        username: "CatMan",
        password: "123",
        email: "mrcat@hotmail.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWomen: true,

        name: "Jimmy",

        gender: "male",
        age: 28,
        location: "Indre Østfold",
        bio: "Purr purr.",
        interests: ["FuttyBallin'", "Parkour",],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        messages: [],
        isPrincessCat: false,
        isImposter: true,

        feed: [],
        mcClub: "None",
        userIMG: "",
        userImages: ["Assets/Misc/catman.png","Assets/Misc/catperson.png"],
      },


      //Female Users


      {
        id: 3,
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
        messages: [],
        isPrincessCat: false,
        isImposter: false,

        feed: [],
        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat1.webp",
        userImages: ["Assets/Girlcats/girlcat1.webp"],
      },
      {
        id: 4,
        username: "Anna",
        password: "123",
        email: "anna.williams@example.com",
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
        messages: [],
        isPrincessCat: false,
        isImposter: false,

        feed: [],
        mcClub: "None",
        userIMG: "",
        userImages: ["Assets/Girlcats/girlcat3.webp","Assets/Girlcats/girlcat2.webp"],
      },
      {
        id: 5,
        username: "Diana",
        password: "123",
        email: "diana.brown@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWomen: false,
        name: "Diana",

        gender: "female",
        age: 25,
        location: "Buckingham Palace",
        bio: "I have a dog-servant.",
        interests: ["FurryBallin'", "Food"],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        messages: [],
        isPrincessCat: true,
        isImposter: false,

        feed: [],
        mcClub: "None",
        userIMG: "",
        userImages: ["Assets/Misc/pcatGrey.png", "Assets/Misc/pcatGrey2.png",],
      },
      {
        id: 6,
        username: "MissMargareth",
        password: "123",
        email: "margareth@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWomen: false,
        name: "Emma",

        gender: "female",
        age: 25,
        location: "The Rockefeller Estate",
        bio: "Always hold your nose up high",
        interests: ["FurryBallin'", "Food"],
        interestsBox: ['Martial Arts', 'Riding Motorcycles','Surfing','The Office', 'Gaming','Netflix', 'Parkour', 'FurryBallin',],
        liked: [],
        disliked: [],
        messages: [],
        isPrincessCat: false,
        isImposter: false,

        feed: [],
        mcClub: "None",
        userIMG: "",
        userImages: ["Assets/Misc/pcatBrown.png","Assets/Misc/pcatGrey2.png",],
      },
      ], //Users Syntax
      
      adminPage: {
        bannedUser: [],
      
      },//adminPage Syntax
    }, //Data Syntax
}; //Model Syntax