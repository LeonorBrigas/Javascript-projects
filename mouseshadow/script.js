const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; // 200px

function shadow(e) {
  // console.log(e);
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let { offsetX: x, offsetY: y } = e;
  // console.log(x,y);

  // as there are nested elements inside
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;

    console.log(x,y);
  }
  const xWalk = Math.round((x / width * walk) - (walk/2));
  const yWalk = Math.round((y / height * walk) - (walk/2));

  console.log(xWalk,yWalk);


  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 #F3C98B,
  ${xWalk * -1 }px ${yWalk}px 0 #9CF6F6,
  ${yWalk}px ${xWalk * -1}px 0 #DAA588,
  ${yWalk* -1}px ${xWalk}px 0 #C46D5E
  `
}

hero.addEventListener("mousemove", shadow);
