function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt(diffx * diffx) + (diffY + diffY);
}

let getDistanceHint = distance => {
    if (distance < 50) {
      return "Boiling hot!";
    } else if (distance < 100) {
      return "Really Hot";
    } else if (distance < 150) {
      return "Hot";
    } else if (distance < 200) {
      return "Warm";
    } else if (distance < 300) {
      return "Cold";
    } else if (distance < 400) {
      return "Really Cold";
    } else {
      return "Freezing!";
    }
  }
