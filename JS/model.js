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
    ],
    currentPage: "userLoginPage",
  }, // app Syntax

  input: {
    loginUser: {
      Id: null,
      username: null,
      password: null,
      logInMesssage: "",
    }, //loginInputs Syntax

    profile: {
      selectedUser: null,
      selectedMatch: null,
      selectedProfileUser: null,
    },

    registerUser: {
      Id: null,
      username: null,
      password: null,
      passwordConfirm: null,
      email: null,
      errorMessage: "",

      name: null,
      gender: null,
      location: null,
      age: null,

      showWoman: false,
      showMen: false,
      userOwner: null,
      bio: "",
      interests: [],
      mcClub: "",

      userIMG: "",
      userIMGSProfile: [],

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
        Id: 0,
        username: "Roger",
        password: "123",
        email: "roger@gmail.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 34,
        location: "Larvik",
        bio: "lorem ipsum sin dalor",
        interests: ["Ting 1", "Ting 2", "Ting 3", "Ting 4"],

        mcClub: "Hells Angels",
        userIMG: "",
        userIMGSProfile: ["IMG1", "IMG2", "IMG3", "IMG4"],
      },
      {
        //Male Users
        Id: 1,
        username: "JohnDoe",
        password: "password123",
        email: "john.doe@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 28,
        location: "Oslo",
        bio: "Love to travel and explore new cultures.",
        interests: ["Football", "Reading", "Traveling"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat1.webp",
        userIMGSProfile: ["Assets/Boycats/boycat1.webp"],
      },
      {
        Id: 2,
        username: "MikeSmith",
        password: "password123",
        email: "mike.smith@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 22,
        location: "Bergen",
        bio: "Tech enthusiast and gamer.",
        interests: ["Gaming", "Technology"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat2.webp",
        userIMGSProfile: ["Assets/Boycats/boycat2.webp"],
      },
      {
        Id: 3,
        username: "AlexBrown",
        password: "password123",
        email: "alex.brown@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 30,
        location: "Stavanger",
        bio: "Outdoor lover and photographer.",

        interests: ["Photography", "Hiking"],
        mcClub: "None",
        userIMG: "Assets/Boycats/boycat3.webp",
        userIMGSProfile: ["Assets/Boycats/boycat3.webp"],
      },
      {
        Id: 4,
        username: "SamGreen",
        password: "password123",
        email: "sam.green@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 25,
        location: "Trondheim",
        bio: "Music lover and aspiring chef.",
        interests: ["Cooking", "Music"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat4.webp",
        userIMGSProfile: ["Assets/Boycats/boycat4.webp"],
      },
      {
        Id: 5,
        username: "ChrisWhite",
        password: "password123",
        email: "chris.white@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 27,
        location: "Oslo",
        bio: "Fitness fanatic and health guru.",
        interests: ["Fitness", "Health"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat5.webp",
        userIMGSProfile: ["Assets/Boycats/boycat5.webp"],
      },
      {
        Id: 6,
        username: "TomBlack",
        password: "password123",
        email: "tom.black@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 33,
        location: "Larvik",
        bio: "Sports enthusiast and traveler.",
        interests: ["Sports", "Traveling"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat6.webp",
        userIMGSProfile: ["Assets/Boycats/boycat6.webp","Assets/Misc/placeholderimg.webp","Assets/Misc/placeholderimg.webp","Assets/Misc/placeholderimg.webp",],
      },
      {
        Id: 7,
        username: "BenBlue",
        password: "password123",
        email: "ben.blue@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 29,
        location: "Bergen",
        bio: "Coffee lover and tech geek.",
        interests: ["Coffee", "Technology"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat7.webp",
        userIMGSProfile: ["Assets/Boycats/boycat7.webp"],
      },
      {
        Id: 8,
        username: "JakeRed",
        password: "password123",
        email: "jake.red@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 31,
        location: "Stavanger",
        bio: "Adventure seeker.",
        interests: ["Traveling", "Adventure sports"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat8.webp",
        userIMGSProfile: ["Assets/Boycats/boycat8.webp"],
      },
      {
        Id: 9,
        username: "LiamGray",
        password: "password123",
        email: "liam.gray@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 24,
        location: "Oslo",
        bio: "Aspiring musician.",
        interests: ["Music", "Writing"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat9.webp",
        userIMGSProfile: ["Assets/Boycats/boycat9.webp"],
      },
      {
        Id: 10,
        username: "NoahJohnson",
        password: "password123",
        email: "noah.johnson@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 26,
        location: "Bergen",
        bio: "Graphic designer and art lover.",
        interests: ["Art", "Design"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat10.webp",
        userIMGSProfile: ["Assets/Boycats/boycat10.webp"],
      },
      {
        Id: 11,
        username: "EthanMartinez",
        password: "password123",
        email: "ethan.martinez@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 29,
        location: "Stavanger",
        bio: "Passionate about cooking and food.",
        interests: ["Cooking", "Food"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat11.webp",
        userIMGSProfile: ["Assets/Boycats/boycat11.webp"],
      },
      {
        Id: 12,
        username: "MasonGarcia",
        password: "password123",
        email: "mason.garcia@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 32,
        location: "Larvik",
        bio: "Tech enthusiast and gamer.",
        interests: ["Gaming", "Technology"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat12.webp",
        userIMGSProfile: ["Assets/Boycats/boycat12.webp"],
      },
      {
        Id: 13,
        username: "LoganHernandez",
        password: "password123",
        email: "logan.hernandez@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 27,
        location: "Oslo",
        bio: "Sports fan and outdoor adventurer.",
        interests: ["Sports", "Hiking"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat13.webp",
        userIMGSProfile: ["Assets/Boycats/boycat13.webp"],
      },
      {
        Id: 14,
        username: "JamesLopez",
        password: "password123",
        email: "james.lopez@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 30,
        location: "Bergen",
        bio: "Loves reading and writing.",
        interests: ["Literature", "Writing"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat14.webp",
        userIMGSProfile: ["Assets/Boycats/boycat14.webp"],
      },
      {
        Id: 15,
        username: "AlexanderWilson",
        password: "password123",
        email: "alexander.wilson@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 35,
        location: "Stavanger",
        bio: "Fitness coach.",
        interests: ["Fitness", "Health"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat15.webp",
        userIMGSProfile: ["Assets/Boycats/boycat15.webp"],
      },
      {
        Id: 16,
        username: "DanielAnderson",
        password: "password123",
        email: "daniel.anderson@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 26,
        location: "Larvik",
        bio: "Travel blogger.",
        interests: ["Travel", "Photography"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat16.webp",
        userIMGSProfile: ["Assets/Boycats/boycat16.webp"],
      },
      {
        Id: 16,
        username: "DanielAnderson",
        password: "password123",
        email: "daniel.anderson@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 26,
        location: "Larvik",
        bio: "Travel blogger.",
        interests: ["Travel", "Photography"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat17.webp",
        userIMGSProfile: ["Assets/Boycats/boycat17.webp"],
      },
      {
        Id: 17,
        username: "HenryThomas",
        password: "password123",
        email: "henry.thomas@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 29,
        location: "Oslo",
        bio: "Dog lover and outdoor enthusiast.",
        interests: ["Dogs", "Camping"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat18.webp",
        userIMGSProfile: ["Assets/Boycats/boycat18.webp"],
      },
      {
        Id: 18,
        username: "OliverJackson",
        password: "password123",
        email: "oliver.jackson@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 33,
        location: "Bergen",
        bio: "Tech entrepreneur.",
        interests: ["Startups", "Innovation"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat19.webp",
        userIMGSProfile: ["Assets/Boycats/boycat19.webp"],
      },
      {
        Id: 19,
        username: "ElijahWhite",
        password: "password123",
        email: "elijah.white@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 34,
        location: "Trondheim",
        bio: "Passionate about environmental issues.",
        interests: ["Sustainability", "Gardening"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat20.webp",
        userIMGSProfile: ["Assets/Boycats/boycat20.webp"],
      },
      {
        Id: 20,
        username: "BenjaminClark",
        password: "password123",
        email: "benjamin.clark@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 27,
        location: "Oslo",
        bio: "History buff and traveler.",
        interests: ["History", "Travel"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat21.webp",
        userIMGSProfile: ["Assets/Boycats/boycat21.webp"],
      },
      {
        Id: 21,
        username: "LucasLewis",
        password: "password123",
        email: "lucas.lewis@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 25,
        location: "Larvik",
        bio: "Gamer and comic book fan.",
        interests: ["Gaming", "Comics"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat22.webp",
        userIMGSProfile: ["Assets/Boycats/boycat22.webp"],
      },
      {
        Id: 22,
        username: "MasonRobinson",
        password: "password123",
        email: "mason.robinson@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 28,
        location: "Stavanger",
        bio: "Fitness junkie and sports enthusiast.",
        interests: ["Fitness", "Sports"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat23.webp",
        userIMGSProfile: ["Assets/Boycats/boycat23.webp"],
      },
      {
        Id: 23,
        username: "JamesHall",
        password: "password123",
        email: "james.hall@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 31,
        location: "Bergen",
        bio: "Culinary artist.",
        interests: ["Cooking", "Food"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat24.webp",
        userIMGSProfile: ["Assets/Boycats/boycat24.webp"],
      },
      {
        Id: 24,
        username: "LiamYoung",
        password: "password123",
        email: "liam.young@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 30,
        location: "Oslo",
        bio: "Loves music and dancing.",
        interests: ["Music", "Dance"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat25.webp",
        userIMGSProfile: ["Assets/Boycats/boycat25.webp"],
      },
      {
        Id: 25,
        username: "EthanSmith",
        password: "password123",
        email: "ethan.smith@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 27,
        location: "Trondheim",
        bio: "Adventure seeker and travel lover.",
        interests: ["Travel", "Adventure"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat26.webp",
        userIMGSProfile: ["Assets/Boycats/boycat26.webp"],
      },
      {
        Id: 26,
        username: "NoahJohnson",
        password: "password123",
        email: "noah.johnson@example.com",
        isAdmin: false,
        owner: null,
        showMen: false,
        showWoman: true,

        gender: "male",
        age: 32,
        location: "Drammen",
        bio: "Tech enthusiast and gamer.",
        interests: ["Technology", "Gaming"],

        mcClub: "None",
        userIMG: "Assets/Boycats/boycat27.webp",
        userIMGSProfile: ["Assets/Boycats/boycat27.webp"],
      },










      //Female Users











      {
        Id: 27,
        username: "EmmaBrown",
        password: "password123",
        email: "emma.brown@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 25,
        location: "Oslo",
        bio: "Food lover and chef.",
        interests: ["Cooking", "Food"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat1.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat1.webp"],
      },
      {
        Id: 28,
        username: "OliviaWilliams",
        password: "password123",
        email: "olivia.williams@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 30,
        location: "Bergen",
        bio: "Bookworm and writer.",
        interests: ["Reading", "Writing"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat2.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat2.webp"],
      },
      {
        Id: 29,
        username: "SophiaJones",
        password: "password123",
        email: "sophia.jones@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 29,
        location: "Stavanger",
        bio: "Nature lover and photographer.",
        interests: ["Photography", "Nature"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat3.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat3.webp"],
      },
      {
        Id: 30,
        username: "AvaJohnson",
        password: "password123",
        email: "ava.johnson@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 23,
        location: "Kristiansand",
        bio: "Fashion enthusiast and stylist.",
        interests: ["Fashion", "Styling"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat4.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat4.webp"],
      },
      {
        Id: 31,
        username: "MiaGarcia",
        password: "password123",
        email: "mia.garcia@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 28,
        location: "Lillehammer",
        bio: "Fitness lover and gym trainer.",
        interests: ["Fitness", "Health"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat5.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat5.webp"],
      },
      {
        Id: 32,
        username: "IsabellaMartinez",
        password: "password123",
        email: "isabella.martinez@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 24,
        location: "Tromsø",
        bio: "Art lover and painter.",
        interests: ["Art", "Painting"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat6.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat6.webp"],
      },
      {
        Id: 33,
        username: "CharlotteThompson",
        password: "password123",
        email: "charlotte.thompson@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 31,
        location: "Oslo",
        bio: "Travel blogger and adventurer.",
        interests: ["Travel", "Blogging"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat7.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat7.webp"],
      },
      {
        Id: 34,
        username: "MiaJohnson",
        password: "password123",
        email: "mia.johnson@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 28,
        location: "Bergen",
        bio: "Food enthusiast and chef.",
        interests: ["Cooking", "Food Photography"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat8.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat8.webp"],
      },
      {
        Id: 35,
        username: "SophieAnderson",
        password: "password123",
        email: "sophie.anderson@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 26,
        location: "Stavanger",
        bio: "Fitness trainer and wellness coach.",
        interests: ["Fitness", "Health"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat9.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat9.webp"],
      },
      {
        Id: 36,
        username: "OliviaBrown",
        password: "password123",
        email: "olivia.brown@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 29,
        location: "Trondheim",
        bio: "Nature lover and environmentalist.",
        interests: ["Hiking", "Sustainability"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat10.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat10.webp"],
      },
      {
        Id: 37,
        username: "LilyGreen",
        password: "password123",
        email: "lily.green@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 25,
        location: "Kristiansand",
        bio: "Tech enthusiast and software developer.",
        interests: ["Technology", "Programming"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat11.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat11.webp"],
      },
      {
        Id: 38,
        username: "EllaSmith",
        password: "password123",
        email: "ella.smith@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 27,
        location: "Drammen",
        bio: "Fitness junkie and yoga instructor.",
        interests: ["Yoga", "Health"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat12.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat12.webp"],
      },
      {
        Id: 39,
        username: "ChloeJones",
        password: "password123",
        email: "chloe.jones@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 30,
        location: "Ålesund",
        bio: "Bookworm and aspiring author.",
        interests: ["Reading", "Writing"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat13.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat13.webp"],
      },
      {
        Id: 40,
        username: "AvaWilson",
        password: "password123",
        email: "ava.wilson@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 22,
        location: "Lillehammer",
        bio: "Music lover and guitarist.",
        interests: ["Music", "Guitar"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat14.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat14.webp"],
      },
      {
        Id: 41,
        username: "MiaRoberts",
        password: "password123",
        email: "mia.roberts@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 23,
        location: "Haugesund",
        bio: "Fashion enthusiast and stylist.",
        interests: ["Fashion", "Styling"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat15.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat15.webp"],
      },
      {
        Id: 42,
        username: "ZoeLee",
        password: "password123",
        email: "zoe.lee@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 26,
        location: "Sandnes",
        bio: "Photography lover and traveler.",
        interests: ["Photography", "Travel"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat16.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat16.webp"],
      },
      {
        Id: 43,
        username: "EmilyMartin",
        password: "password123",
        email: "emily.martin@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 29,
        location: "Porsgrunn",
        bio: "Gardening enthusiast and environmentalist.",
        interests: ["Gardening", "Sustainability"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat17.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat17.webp"],
      },
      {
        Id: 44,
        username: "HannahClark",
        password: "password123",
        email: "hannah.clark@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 32,
        location: "Bodø",
        bio: "History buff and museum curator.",
        interests: ["History", "Museums"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat18.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat18.webp"],
      },
      {
        Id: 45,
        username: "GraceWalker",
        password: "password123",
        email: "grace.walker@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 27,
        location: "Molde",
        bio: "Creative writer and poet.",
        interests: ["Writing", "Poetry"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat19.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat19.webp"],
      },
      {
        Id: 46,
        username: "IsabellaTurner",
        password: "password123",
        email: "isabella.turner@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 24,
        location: "Narvik",
        bio: "Animal rights activist and veterinarian.",
        interests: ["Animals", "Activism"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat20.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat20.webp"],
      },
      {
        Id: 47,
        username: "SophiaYoung",
        password: "password123",
        email: "sophia.young@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 29,
        location: "Gjøvik",
        bio: "Culinary artist and food stylist.",
        interests: ["Culinary Arts", "Food Styling"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat21.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat21.webp"],
      },
      {
        Id: 48,
        username: "AvaScott",
        password: "password123",
        email: "ava.scott@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 26,
        location: "Hamar",
        bio: "Digital marketer and social media expert.",
        interests: ["Marketing", "Social Media"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat22.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat22.webp"],
      },
      {
        Id: 49,
        username: "LilyMoore",
        password: "password123",
        email: "lily.moore@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 30,
        location: "Lillehammer",
        bio: "Adventure seeker and mountain climber.",
        interests: ["Climbing", "Adventure"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat23.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat23.webp"],
      },
      {
        Id: 50,
        username: "EllaBennett",
        password: "password123",
        email: "ella.bennett@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 28,
        location: "Ski",
        bio: "Tech innovator and startup founder.",
        interests: ["Entrepreneurship", "Technology"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat24.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat24.webp"],
      },
      {
        Id: 51,
        username: "MiaJohnson",
        password: "password123",
        email: "mia.johnson@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 29,
        location: "Oslo",
        bio: "Passionate about photography and travel.",
        interests: ["Photography", "Travel"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat25.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat25.webp"],
      },
      {
        Id: 52,
        username: "SophieClark",
        password: "password123",
        email: "sophie.clark@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 27,
        location: "Bergen",
        bio: "Foodie and recipe developer.",
        interests: ["Cooking", "Food Blogging"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat26.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat26.webp"],
      },
      {
        Id: 53,
        username: "AvaDavies",
        password: "password123",
        email: "ava.davies@example.com",
        isAdmin: false,
        owner: null,
        showMen: true,
        showWoman: false,

        gender: "female",
        age: 31,
        location: "Stavanger",
        bio: "Fitness enthusiast and yoga instructor.",
        interests: ["Fitness", "Yoga"],

        mcClub: "None",
        userIMG: "Assets/Girlcats/girlcat27.webp",
        userIMGSProfile: ["Assets/Girlcats/girlcat27.webp"],
      },
    ], //Users Syntax
  }, //Data Syntax
}; //Model Syntax
