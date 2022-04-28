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



for (let i=0; i<team.length;i++){
    const container = document.querySelector(".container");
    const infoContainer = document.createElement("p");
    const imageContainer = document.createElement("img");
    console.log(infoContainer);
    let person = team[i];
    for (let key in person){
        if (key === "image"){
            imageContainer.setAttribute("src",`img/${person[key]}`)
        } else {
            infoContainer.append(person[key]);
        }
    }
    container.append(infoContainer);
    container.append(imageContainer);
}