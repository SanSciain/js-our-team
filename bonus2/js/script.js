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

// NON FUNZIONA :C

for (let i=0; i<team.length;i++){
    const container = document.querySelector(".team-container");
    const card = createCard()[0];
    const imageTag = createCard()[1];
    const infoName = createCard()[2];
    const infoRole = createCard()[3];
    let person = team[i];
    imageTag.setAttribute("src",`img/${person.image}`);
    infoName.innerHTML = person.name;
    infoRole.innerHTML = person.role;

    container.append(card);
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
    return [card,imageTag,infoName,infoRole];
}