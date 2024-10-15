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
    currentPage: 'adminPage',
  },// app Syntax



  input: {
    loginUser: {
        username: null,
        password: null,
    
    },//loginInputs Syntax

    profile: {
      selectedUser: 0,
      selectedMatch: 0,
    },

    registerUser: {
      username: null,
      password: null,
      tempConfirmPassword: null,
      email: null,
      location: null,

      name: null,
      age: null,
      userOwner: null,
      userImgProfile: [],  

      isPrincessCat: false,
      agreedToEULA: true,
    },//registerInputs Syntax

    messagesInput: {
        messageToPush: null,

    },//Messages Syntax

  },//Inputs Syntax

  
  
  data: {
  
    users: {

    males:
    {
        ID: 0,
        username: "Rogermann",
        password: "eksempelpassord",
        email: "roger@gmail.com",
        isAdmin: false,
        owner: null,
        
        name: "Roger",
        gender: "male",
        age: 34,
        location: "Larvik",
        
        bio: "lorem ipsum sin dalor",
        interests: ["Ting 1", "Ting 2", "Ting 3", "Ting 4"],
        mcClub: "Hells Angels",
        genderPreferance: "female",
        
        userIMG: "/Assets/Boycats/boycat1.webp",
        userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],
        messagePrompts: ['Hei', ], 
    },
        

    //Males Syntax
   
    females: 
        {
            ID: 1,
            username: "sophia92",
            password: "password123",
            email: "sophia92@example.com",
            isAdmin: false,
            owner: null,
            
            name: "Sophia Johnson",
            gender: "female",
            location: "Larvik",
            age: 28,
            
            bio: "Lover of art and nature. Always seeking adventure!",
            interests: ["painting", "hiking", "photography", "reading"],
            mcClub: "Hells Angels",
            genderPreferance: "male",
            
            userIMG: "/Assets/Gircats/girlcat1.webp",
            userIMGSProfile: ["IMG1","IMG2","IMG3","IMG4"],
            messagePrompts: ["What's your favorite book?", "Tell me about your last adventure."],
        },
        
    
    // Females Syntax

    },//Users Syntax
  

    },//Data Syntax



};//Model Syntax
