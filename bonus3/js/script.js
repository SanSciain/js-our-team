const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const formContainer = document.getElementById("add-member");
const container = document.querySelector(".team-container");

const btn = formContainer.querySelector("#addMemberButton");
btn.addEventListener("click",function(){
    const nameToAdd = formContainer.querySelector("#name");
    const roleToAdd = formContainer.querySelector("#role");
    const imageToAdd = formContainer.querySelector("#image");
    addMember(nameToAdd.value, roleToAdd.value, imageToAdd.value);

    addCard(team.length -1);

});

for (let i=0; i<team.length;i++){
    // const container = document.querySelector(".team-container");
    // const card = createCard();
    // const imageTag = card.querySelector("img");
    // const infoName = card.querySelector("h3");
    // const infoRole = card.querySelector("p");
    // let person = team[i];
    // imageTag.setAttribute("src",`img/${person.image}`);
    // infoName.innerHTML = person.name;
    // infoRole.innerHTML = person.role;
    addCard(i);
    
}

function createCard(){
    const card = document.createElement("div");
    card.classList.add("team-card");
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const imageTag = document.createElement("img");
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    const infoName = document.createElement("h3");
    const infoRole = document.createElement("p");
    card.append(cardImage,cardText);
    cardImage.append(imageTag);
    cardText.append(infoName,infoRole);
    return card;
}


function addCard(index){
    // const container = document.querySelector(".team-container");
    const card = createCard();
    const imageTag = card.querySelector("img");
    const infoName = card.querySelector("h3");
    const infoRole = card.querySelector("p");
    let person = team[index];
    imageTag.setAttribute("src",`img/${person.image}`);
    infoName.innerHTML = person.name;
    infoRole.innerHTML = person.role;
    container.append(card);
}


function addMember(nameAdd, roleAdd, imageAdd){
    const newMember ={
        name: nameAdd,
        role: roleAdd,
        image: imageAdd
    } 
    team.push(newMember);
}