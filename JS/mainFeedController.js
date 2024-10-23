let maleUsers = [];
let femaleUsers = [];
filterByGender()

// 1. Lage kopi av model.data.users
// 2. Sortere model.data.user i kjønn  mann || kvinne
// 3. Printe ut model.data.users i mainfeed
// 4. Legg til en funksjon som gjør at når du liker blir index +1
// 5. Når du liker en bruker pusher du brukeren inn i inboxView og slicer vekk fra arrayet som vises i mainFeed.


function filterByGender(){
       
    
    for (let i = 0; i < model.data.users.length; i++) {   
    
        // Checks if user is male
        if(model.data.users[i].gender === "male"){
            maleUsers.push(model.data.users[i])
        }
    
        // Checks if user is female
        if(model.data.users[i].gender === "female"){
            femaleUsers.push(model.data.users[i])
        }
    };
   
    // Makes 2 copies of model.data.users (maleUsers && femaleUsers)
    return {
        maleUsers : maleUsers,
        femaleUsers : femaleUsers,
    };

}