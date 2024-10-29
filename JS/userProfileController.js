function goToProfile(){
    model.app.currentPage = model.app.pages[2]
    changeView();
}

function createImagesStreamProfile(){
    let createImagesStreamHtml = '';
    let currentUser = model.data.users[model.input.profile.selectedUser];
    for(let i = 0; i < model.data.users[model.input.profile.selectedUser].userImages.length; i++){
        createImagesStreamHtml += /*HTML*/ `
        <div>${model.data.users[model.input.profile.selectedUser].userImages[i]}</div>`;
    }
    
        return createImagesStreamHtml;
    }
//Interests, det er 8 "aktive" og en stor liste av kandiater, når man trykker på en fra master-lista slottes den inn i aktive fra 1-8
//Når man klikker på en fra aktive, fjernes den og det åpnes en slot. Når det er valgt 8 valg, skal det ikke gå å legge til flere.
//Det blir vel 2 sett med arrays, en for active og en for master-list. Bruker for-løkke til å loope gjennom master-liste til man finner valgt id, pusher da denne til active. 
//Hvis man fjener fra active vil den da splice den ut. De som er valgt i master-liste bør kanskje være "grået" ut eller lignende, samt gjøre det umulig å velge samme interesse.

function createChosenInterests () {};
let createSelectedInterests = '';
let currentUser=model.data.users[model.input.profile.selectedUser];
for ( i=0; i < currentUser.interests.length; i++) {
    createSelectedInterests += /*HTML*/ `
    
    
    `

};
