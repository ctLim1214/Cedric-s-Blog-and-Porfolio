randomBSGo();

function ShowMore(){
    document.getElementById('hideableSection').style.display = 'flex';
    document.getElementById('InitButton').style.display = 'none';
}

function ShowLess(){
    document.getElementById('hideableSection').style.display = 'none';
    document.getElementById('InitButton').style.display = 'flex';
}

function randomBSGo(){
    const likesAndViews = document.getElementsByClassName('views');
    let randomNumber = 0;
    for (let i = 0; i < likesAndViews.length; i++) {
        if (i % 2 === 0){ //literally cheese
            randomNumber = Math.floor(Math.random() * 150);
            likesAndViews[i].textContent = randomNumber + " views.";
        } else {
            likesAndViews[i].textContent = Math.floor(randomNumber / 2) + " likes.";
        }
    }
}