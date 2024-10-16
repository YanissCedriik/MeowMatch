//model
const appDiv = document.getElementById('app')
const model = {
  app: {
    pages: [
      "userLoginPage",
      "registerUserPage",
      "userProfilePage",
      "mainFeedPage",
      "chatInboxPage",
      "chatRoomPage",
      "adminPage",],
    currentPage: 'userLoginPage',
  },// app Syntax



  input: {
    loginUser: {
        Id: null,
        username: null,
        password: null,
        logInMesssage: '',
    
    },//loginInputs Syntax

    profile: {
      selectedUser: null,
      selectedMatch: null,
    },

    registerUser: {
      Id: null,
      username: null,
      password: null,
      passwordConfirm: null,
      email: null,
      errorMessage:'',
      
      name: null,
      gender: null,
      location: null,
      age: null,
      
      showWoman: false,
      showMen: false,
      userOwner: null,
      bio: '',
      interests: [],
      mcClub: '',
      
      userIMG: '',
      userIMGSProfile: [],

      isPrincessCat: false,
      agreedToEULA: true,
    },//registerInputs Syntax

    messagesInput: {
        messageToPush: null,

    },//Messages Syntax

  },//Inputs Syntax

  
  
  data: {
  
    users: [
        {
        Id: 0,
        username: "Rogermann",
        password: "eksempelpassord",
        email: "roger@gmail.com",
        isAdmin: false,
        owner: null,
        gender: null,
        showWoman: true,
        showMen: false,

        name: "Roger",
        gender: "male",
        age: 34,
        location: "Larvik",
        
        bio: "lorem ipsum sin dalor",
        interests: ["Ting 1", "Ting 2", "Ting 3", "Ting 4"],
        mcClub: "Hells Angels",
        
        userIMG: "/Assets/Boycats/boycat1.webp",
        userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],

        },
   
        {
            Id: 1,
            username: "sophia92",
            password: "password123",
            email: "sophia92@example.com",
            isAdmin: false,
            owner: null,
            showWoman: false,
            showMen: true,
            
            name: "Sophia Johnson",
            gender: "female",
            location: "Larvik",
            age: 28,
            
            bio: "Lover of art and nature. Always seeking adventure!",
            interests: ["painting", "hiking", "photography", "reading"],
            mcClub: "Hells Angels",
            
            userIMG: "/Assets/Gircats/girlcat1.webp",
            userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],
      },

      {
        Id: 2,
        username: "Marie",
        password: "123",
        email: "marie@getacademy.no",
        isAdmin: false,
        owner: null,
        showWoman: false,
        showMen: true,
        
        name: "Marie Askjem",
        gender: "female",
        location: "Larvik",
        age: 30,
        
        bio: "I have a dog",
        interests: ["Jujutsu", "Dog-walking", "Programming"],
        mcClub: "Hells Angels",
        
        userIMG: "/Assets/Gircats/girlcatw.webp",
        userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],
  },
  {
    Id: 3,
    username: "Fluffy12",
    password: "123",
    email: "fluffy@getacademy.no",
    isAdmin: false,
    owner: null,
    showWoman: false,
    showMen: true,
    
    name: "Fluffy",
    gender: "female",
    location: "CatTown",
    age: 5,
    
    bio: "I'm a mom to ten small buggers'",
    interests: ["Krav Maga", "Catnip", "Programming"],
    mcClub: "Hells Angels",
    
    userIMG: "/Assets/Gircats/girlcat6.webp",
    userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],
},

{
  Id: 4,
  username: "Zorro",
  password: "123",
  email: "zorro@getacademy.no",
  isAdmin: false,
  owner: null,
  showWoman: true,
  showMen: false,
  
  name: "Zorro",
  gender: "male",
  location: "CatTown",
  age: 5,
  
  bio: "I'm a mom to ten small buggers'",
  interests: ["Shoplifting", "Straywalking", "Physics"],
  mcClub: "PussyCat Angels",
  
  userIMG: "/Assets/Gircats/girlcat2.webp",
  userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],
},
    
   
      ],//Users Syntax
  

    },//Data Syntax


  }//Model Syntax
