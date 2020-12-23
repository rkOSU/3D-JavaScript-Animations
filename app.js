//Movement
const card = document.querySelector('.card');
const container = document.querySelector('.container');


const title = document.querySelector('.title');
const bible = document.querySelector('.bible img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const flavors = document.querySelector('.flavors');


//Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = ((window.innerWidth / 2 - e.pageX) /10);
    let yAxis = ((window.innerHeight / 2 - e.pageY) /10);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Enter animation trigger area
container.addEventListener('mouseenter', (e) => {
    card.style.transition = `none`;
    //Make title pop
    title.style.transform = `translateZ(150px)`;
    bible.style.transform = `translateZ(200px) rotateZ(-15deg)`;
})
//Snap back to flat when cursor is not in animation trigger area
container.addEventListener('mouseleave', e => {
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = `translateZ(0px)`;
    bible.style.transform = `translateZ(0px) rotateZ(0deg)`;
});