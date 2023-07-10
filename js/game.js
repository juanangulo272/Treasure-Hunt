const WIDTH = 400;
const HEIGH = 400;
const d = document

d.addEventListener('DOMContentLoaded', () => {

  const $audio = d.querySelector('.audio')

  d.addEventListener('click',()=>{
    $audio.play()
  })
})

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 80) {
    alert(`Found the treasure in ${clicks} clicks!`);
    location.reload();
  }
});

