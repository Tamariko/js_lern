console.log("script ready");

function moveBall(dx, dy) {
    let ballElem = document.getElementById('ball');
    console.log(ballElem.offsetLeft);
    ballElem.style.left = (ballElem.offsetLeft + dx) + "px";
    ballElem.style.top = (ballElem.offsetTop + dy) + "px";
}
let vx = 1;  //об'явити змінну
let vy = 1;
let balls = [
  {id: 'ball', x: 30, y: 30, vx: 1, vy: 1},
  {id: 'square', x: 430, y: 330, vx: -1, vy: 1}
];
function bounceBalls() {
  let fieldElem = document.getElementById("field");
  for(let ball of balls){
    let ballElem = document.getElementById(ball.id);

    ballElem.style.left = (ballElem.offsetLeft + ball.vx) + "px";
    ballElem.style.top = (ballElem.offsetTop + ball.vy) + "px";
    console.log(fieldElem.offsetHeight)

    if(ballElem.offsetTop + ballElem.offsetHeight >= fieldElem.offsetHeight || ballElem.offsetTop <= 0)
      ball.vy = -ball.vy;
    if(ballElem.offsetLeft + ballElem.offsetWidth >= fieldElem.offsetWidth || ballElem.offsetLeft <= 0)
      ball.vx = -ball.vx;
  }
}
function bounceBall() {

    let fieldElem = document.getElementById("field");
    console.log(fieldElem.offsetWidth);

    let ballElem = document.getElementById("ball");
    console.log(ballElem.offsetLeft);


    // if(ballElem.offsetLeft + ballElem.offsetWidth < fieldElem.offsetWidth)
        // ballElem.style.left = (ballElem.offsetLeft + 1) + "px";
        ballElem.style.left = (ballElem.offsetLeft +vx) + "px";
    // if(ballElem.offsetTop + ballElem.offsetHeight < fieldElem.offsetHeight)
        // ballElem.style.top = (ballElem.offsetTop + 1) + "px";
        ballElem.style.top = (ballElem.offsetTop + vy) + "px";
        console.log(fieldElem.offsetHeight)

    if(ballElem.offsetTop + ballElem.offsetHeight >= fieldElem.offsetHeight || ballElem.offsetTop <= 0)
      vy = -vy;
      // vy = -1;

    // if(ballElem.offsetTop <= 0){
    //   vy = 1;

    if(ballElem.offsetLeft + ballElem.offsetWidth >= fieldElem.offsetWidth || ballElem.offsetLeft <= 0)
    // vx = -1;
    // if(ballElem.offsetLeft <= 0)
    // vx = 1;
      vx = -vx;
}
setInterval(bounceBalls, 10);
// setInterval(bounceBall, 10); //через k мілісекунд
    // ballElem.style.left= (ballElem.offsetLeft + dx) + "px";
    // ballElem.style.top= (ballElem.offsetTop + dy) + "px";

// setInterval(moveBall, 10, 1, 1);

  // setInterval(bounceBall, -10);

// moveBall(200, 50);


// let ballElem = document.getElementById('ball');

// console.log(ballElem.offsetLeft);



// ballElem.style.left= (ballElem.offsetLeft + 100)+ "px";
// for(let i=0; i<100; i++){
//   ballElem.style.left= (ballElem.offsetLeft + 1)+ "px";
// }
